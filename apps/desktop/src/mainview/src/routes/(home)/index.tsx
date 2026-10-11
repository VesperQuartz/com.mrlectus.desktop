import { createFileRoute } from "@tanstack/react-router";
import { Button } from "#components/ui/button";

export const Route = createFileRoute("/(home)/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="min-h-screen">
			<div className="p-10 flex gap-2 flex-col">
				<div>Hello "/(home)/"!</div>
				<Button>About</Button>
			</div>
		</div>
	);
}
