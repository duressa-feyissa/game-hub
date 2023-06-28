import { PlatForm } from "./PlatForm";


export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: PlatForm; }[];
  metacritic: number;
  rating_top: number;
}
