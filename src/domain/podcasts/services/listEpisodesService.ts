import { PodCastTransfer } from "../models/PodCastTransfer";
import { podCastRepository } from "../repositories/podCastRepository";
import { httpStatusCode } from "../../../utils/statusCode";

export const listEpisodesService = async (): Promise<PodCastTransfer> => {
  const data = await podCastRepository();

  const response: PodCastTransfer = {
    statusCode: data.length ? httpStatusCode.OK : httpStatusCode.NO_CONTENT,
    body: data,
  };

  return response;
};
