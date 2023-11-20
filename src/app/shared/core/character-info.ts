export interface CharacterInfo {
  name: string;
  path: string;
  element: string;
  rarity: number;
  stats: CharacterStats;
  skills: Skill[];
  eidolons: Eidolon[];
  icon: string;
}

export interface CharacterStats {
  base: Stats;
  traces: Stats;
}

export interface Stats {
  taunt?: number;
  breakEffect?: number;
  outgoingHealing?: number;
  maxEnergy?: number;
  energyRegenerationRate?: number;
  effectHitRate?: number;
  effectRes?: number;

  hp?: number;
  hpRate?: number;
  atk?: number;
  atkRate?: number;
  def?: number;
  defRate?: number;
  spd?: number;
  spdRate?: number;

  critRate?: number;
  critDmg?: number;

  fireDmg?: number;
  quantumDmg?: number;
  iceDmg?: number;
  physicalDmg?: number;
  imaginaryDmg?: number;
  lightningDmg?: number;
  windDmg?: number;

  fireRes?: number;
  quantumRes?: number;
  iceRes?: number;
  physicalRes?: number;
  imaginaryRes?: number;
  lightningRes?: number;
  windRes?: number;

  followUpDmg?: number;
  dotDamage?: number;
  ultimateDmg?: number;
  skillDmg?: number;
  basicAtkDmg?: number;

  defPenetration?: number;
}

export interface Skill {
  type: string;
  name: string;
  areaType: string;
  description: string;
  maxEnergy: number;
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
