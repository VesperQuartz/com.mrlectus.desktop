import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
	createHashHistory,
	createRouter,
	RouterProvider,
} from "@tanstack/react-router";
import { AsyncProvider } from "../providers/async";
import { routeTree } from "./src/routeTree.gen";

const hashHistory = createHashHistory();
const router = createRouter({
	routeTree,
	history: hashHistory,
});

const InnerRouter = () => {
	return <RouterProvider router={router} context={{}} />;
};

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AsyncProvider>
			<InnerRouter />
		</AsyncProvider>
	</StrictMode>,
);
