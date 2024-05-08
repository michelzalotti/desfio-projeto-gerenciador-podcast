import { podCastRepository } from "../repositories/podCastRepository";

export const listEpisodesService = async () => {
  const data = await podCastRepository();

  return data;
};
