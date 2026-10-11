import {
	ApplicationMenu,
	BrowserView,
	BrowserWindow,
	Updater,
	Utils,
} from "electrobun/main";
import type { Rpc } from "../shared/types";

const DEV_SERVER_PORT = 5173;
const DEV_SERVER_URL = `http://localhost:${DEV_SERVER_PORT}`;

// Check if Vite dev server is running for HMR
async function getMainViewUrl(): Promise<string> {
	const channel = await Updater.localInfo.channel();
	if (channel === "dev") {
		try {
			await fetch(DEV_SERVER_URL, { method: "HEAD" });
			console.log(`HMR enabled: Using Vite dev server at ${DEV_SERVER_URL}`);
			return DEV_SERVER_URL;
		} catch {
			console.log(
				"Vite dev server not running. Run 'hutch run dev:hmr' for HMR support.",
			);
		}
	}
	return "views://mainview/index.html";
}

ApplicationMenu.setApplicationMenu([
	{
		label: "App",
		submenu: [{ role: "quit" }],
	},
	{
		label: "Edit",
		submenu: [
			{ role: "undo" },
			{ role: "redo" },
			{ type: "separator" },
			{ role: "cut" },
			{ role: "copy" },
			{ role: "paste" },
			{ role: "selectAll" },
		],
	},
]);

const rpc = BrowserView.defineRPC<Rpc>({
	handlers: {
		requests: {
			addNumber: ({ a, b }) => a + b,
		},
		messages: {
			logTo: ({ message }) => {
				console.log(message);
				console.log("Utils", Utils.paths.userData);
			},
		},
	},
});

// Create the main application window
const url = await getMainViewUrl();

export const mainWindow = new BrowserWindow({
	title: "Desktop App",
	url,
	rpc,
	frame: {
		width: 900,
		height: 700,
		x: 200,
		y: 200,
	},
});

console.log("React Tailwind Vite app started!!");
