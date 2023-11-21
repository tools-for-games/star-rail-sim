import { EquipmentSlotType } from "./equipment-slot-type";

export interface Stat {
    name: string;
    icon: string;
    isSubStat: boolean;
    mainValue: EquipmentStat;
}

export interface EquipmentStat {
    slotTypes: EquipmentSlotType[];
    values: EquipmentStatValue[];
}

export interface EquipmentStatValue {
    rarity: number;
    value: number;
}