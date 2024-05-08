import fs from "node:fs";
import path from "node:path";
import { Podcast } from "../models/PodCast";

export const podCastRepository = async (
  podcastName?: string
): Promise<Podcast[]> => {
  const filePath = path.resolve(__dirname, "podcasts.json");
  let data: Podcast[] = JSON.parse(
    fs.readFileSync(filePath, { encoding: "utf-8" })
  );

  if (podcastName) {
    data = data.filter((podcast) => podcast.podcastName === podcastName);
  }

  return data;
};
