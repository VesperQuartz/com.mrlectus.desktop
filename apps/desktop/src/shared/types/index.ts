import { RPCSchema } from "electrobun";

export type Rpc = {
	bun: RPCSchema<{
		requests: {
			addNumber: {
				params: { a: number; b: number };
				response: number;
			};
		};
		messages: {
			logTo: { message: string };
		};
	}>;
	webview: RPCSchema<{
		requests: {};
		messages: {};
	}>;
};
