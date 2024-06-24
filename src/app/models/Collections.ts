import { APIResult } from "./APIResult";

export interface Collections extends APIResult {
  data: {
    id: string;
    title: string;
    image: string;
    authorId: string;
    private: boolean;
    createdAt: Date;
    users: string[];
  }[];
}
