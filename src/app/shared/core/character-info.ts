import { StatSheet } from "./stat-sheet";

export interface CharacterInfo {
  id: string;
  name: string;
  path: string;
  element: string;
  rarity: number;
  stats: CharacterStats;
  skills: CharacterSkill[];
  eidolons: Eidolon[];
  icon: string;
}

export interface CharacterStats {
  base: StatSheet;
  traces: StatSheet;
}

export interface CharacterSkill {
  type: string;
  name: string;
  areaType: string;
  description: string;
  energy: number;
  break: Break;
  values: number[][];
}

export interface Break {
  value: number;
  areaType: string;
}

export interface Eidolon {
  tier: number;
  name: string;
  description: string;
}
