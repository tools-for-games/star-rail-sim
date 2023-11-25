import { CharacterInfo } from "@shared/core/character-info";
import { EquipmentSlotType } from "../equipment-slot-type";
import { StatType } from "./stat-type";

export interface EquipmentStatValue {
    stat: string;
    value: number;
}

export interface EquipmentBuildStat {
    equipmentSlotType: EquipmentSlotType;
    rarity: number;
    mainStat?: string;
    values: EquipmentStatValue[];
}

export interface LightCone {
    id: string,
    superimpose: number;
}


export class CharacterBuild {
    characterId: string;
    relicIds: string[];
    equipmentStats: EquipmentBuildStat[];
    lightCone?: LightCone;

    constructor(characterId: string) {
        this.characterId = characterId;
        this.relicIds = [];
        this.equipmentStats = [
            { equipmentSlotType: EquipmentSlotType.Head, rarity: 5, values: [], mainStat: StatType.Hp },
            { equipmentSlotType: EquipmentSlotType.Hands, rarity: 5, values: [], mainStat: StatType.Atk },
            { equipmentSlotType: EquipmentSlotType.Body, rarity: 5, values: [] },
            { equipmentSlotType: EquipmentSlotType.Feet, rarity: 5, values: [] },
            { equipmentSlotType: EquipmentSlotType.PlanarSphere, rarity: 5, values: [] },
            { equipmentSlotType: EquipmentSlotType.LinkRope, rarity: 5, values: [] },
        ]
    }
}
