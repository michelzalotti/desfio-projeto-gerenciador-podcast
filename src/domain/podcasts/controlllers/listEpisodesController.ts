import { IncomingMessage, ServerResponse } from "node:http";
import { httpStatusCode } from "../../../utils/statusCode";
import { listEpisodesService } from "../services/listEpisodesService";

export const listEpisodesController = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await listEpisodesService();

  res.writeHead(httpStatusCode.OK, {
    "content-encoding": "application/json",
  });

  res.end(JSON.stringify(content));
};
