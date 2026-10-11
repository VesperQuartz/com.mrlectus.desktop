import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: true,
		},
		mutations: {
			onSuccess: (data, variables, context) => {
				console.log("onSuccess", data, variables, context);
			},
			onError: (error, variables, context) => {
				console.log("onError", error, variables, context);
			},
		},
	},
});

export const AsyncProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children} <ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
