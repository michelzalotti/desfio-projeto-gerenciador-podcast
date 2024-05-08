import { Podcast } from "../models/PodCast";
import { podCastRepository } from "../repositories/podCastRepository";

export const readEpisodeService = async (
  url: string | undefined
): Promise<Podcast> => {
  const query = url?.split("?p=")[1] || "";

  const data = await podCastRepository(query);

  return data[0];
};
