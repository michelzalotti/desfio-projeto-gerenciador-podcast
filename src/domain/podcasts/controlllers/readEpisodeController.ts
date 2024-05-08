import { IncomingMessage, ServerResponse } from "http";
import { readEpisodeService } from "../services/readEpisodeService";

export const readEpisodeController = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const data = await readEpisodeService(req.url);

  res.writeHead(data.statusCode, { "content-encoding": "application/json" });
  res.write(JSON.stringify(data.body));
  res.end();
};
