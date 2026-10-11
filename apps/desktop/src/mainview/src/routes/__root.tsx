import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

export type RootContext = {};

export const Route = createRootRouteWithContext<RootContext>()({
	component: () => (
		<>
			<Outlet />
		</>
	),
});
