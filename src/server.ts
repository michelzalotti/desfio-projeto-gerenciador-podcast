import * as http from "node:http";
import { routes } from "./routes/routes";

const port = process.env.PORT;

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    await routes(req, res);
  }
);

server.listen(port, () => console.log(`Server is running at port: ${port}`));
