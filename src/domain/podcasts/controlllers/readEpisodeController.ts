import { IncomingMessage, ServerResponse } from "http";
import { httpStatusCode } from "../../../utils/statusCode";
import { readEpisodeService } from "../services/readEpisodeService";

export const readEpisodeController = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const data = await readEpisodeService(req.url);

  res.writeHead(httpStatusCode.OK, { "content-encoding": "application/json" });
  res.end(JSON.stringify(data));
};
