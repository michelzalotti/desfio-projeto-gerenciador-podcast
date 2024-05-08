import { IncomingMessage, ServerResponse } from "node:http";
import { listEpisodesService } from "../services/listEpisodesService";

export const listEpisodesController = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const data = await listEpisodesService();

  res.writeHead(data.statusCode, {
    "content-encoding": "application/json",
  });

  res.write(JSON.stringify(data.body));
  res.end();
};
