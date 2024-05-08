import { PodCastTransfer } from "../models/PodCastTransfer";
import { podCastRepository } from "../repositories/podCastRepository";
import { httpStatusCode } from "../../../utils/statusCode";

export const readEpisodeService = async (
  url: string | undefined
): Promise<PodCastTransfer> => {
  const query = url?.split("?p=")[1] || undefined;

  const response: PodCastTransfer = {
    statusCode: 0,
    body: [],
  };

  const data = await podCastRepository(query);

  response.statusCode = data.length
    ? httpStatusCode.OK
    : httpStatusCode.NO_CONTENT;

  response.body = data;

  return response;
};
