
export interface StatSheet {
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
