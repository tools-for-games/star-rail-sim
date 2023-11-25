
import { StatSheet } from "./stat-sheet";
export interface LightConeInfo {
  id: string;
  icon: string;
  name: string;
  rarity: number;
  path: string;
  stats: StatSheet;
  skill: LightConeSkill;
}

export interface LightConeSkill {
  description: string;
  values: number[][];
}
