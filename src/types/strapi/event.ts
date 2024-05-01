import { DataWrapper, Image } from ".";

export type EventResponse = DataWrapper<Event>;

export interface Event {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  type: string;
  facilitatorName: string;
  facilitatorJob: string;
  facilitatorCompany: string;
  hostName: string;
  time: string;
  isPast: boolean;
  link1: string;
  link2: string | null;
  flyer: Image;
}
