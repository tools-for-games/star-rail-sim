import { CharacterInfo } from "@shared/core/character-info";
import { RelicInfo } from "../relic-info";
import { EquipmentSlotType } from "../equipment-slot-type";

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

export class CharacterBuild {
    character: CharacterInfo;
    relics: RelicInfo[];
    equipmentStats: EquipmentBuildStat[];

    constructor(character: CharacterInfo) {
        this.character = character;
        this.relics = [];
        this.equipmentStats = [
            { equipmentSlotType: EquipmentSlotType.Head, rarity: 5, values: [] },
            { equipmentSlotType: EquipmentSlotType.Hands, rarity: 5, values: [] },
            { equipmentSlotType: EquipmentSlotType.Body, rarity: 5, values: [] },
            { equipmentSlotType: EquipmentSlotType.Feet, rarity: 5, values: [] },
            { equipmentSlotType: EquipmentSlotType.PlanarSphere, rarity: 5, values: [] },
            { equipmentSlotType: EquipmentSlotType.LinkRope, rarity: 5, values: [] },
        ]
    }
}
