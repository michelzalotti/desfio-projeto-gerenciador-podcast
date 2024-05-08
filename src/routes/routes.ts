import { IncomingMessage, ServerResponse } from "node:http";
import { listEpisodesController } from "../domain/podcasts/controlllers/listEpisodesController";
import { readEpisodeController } from "../domain/podcasts/controlllers/readEpisodeController";
import { httpStatusCode } from "../utils/statusCode";
import { httpVerbs } from "./httpVerbs";

enum routesURL {
  LIST = "/api/list",
  EPISODE = "/api/episode",
}

export const routes = async (req: IncomingMessage, res: ServerResponse) => {
  const baseURL = req.url?.split("?p=")[0] || "";
  let content;

  if (req.method === httpVerbs.GET) {
    switch (baseURL) {
      case routesURL.LIST:
        content = listEpisodesController(req, res);
        break;
      case routesURL.EPISODE:
        content = readEpisodeController(req, res);
        break;
      default:
        res.writeHead(httpStatusCode.NOT_FOUND, {
          "content-encoding": "application/json",
        });
        res.end(JSON.stringify({ message: "não encontrado." }));
    }
  }

  return content;
};
