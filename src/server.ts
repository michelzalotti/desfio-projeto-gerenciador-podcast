import * as http from "node:http";
import { app } from "./app";

const port = process.env.PORT;
const server = http.createServer(app);

server.listen(port, () => console.log(`Server is running at port: ${port}`));
