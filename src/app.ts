import { IncomingMessage, ServerResponse } from "http";
import { routes } from "./routes/routes";

export const app = async (req: IncomingMessage, res: ServerResponse) => {
  await routes(req, res);
};
