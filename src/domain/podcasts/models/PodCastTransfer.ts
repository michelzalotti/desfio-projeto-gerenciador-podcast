import { Podcast } from "./PodCast";

export interface PodCastTransfer {
  statusCode: number;
  body: Array<Podcast>;
}
