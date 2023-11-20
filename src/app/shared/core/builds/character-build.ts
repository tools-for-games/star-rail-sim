import { CharacterInfo } from "@shared/core/character-info";
import { RelicInfo } from "../relic-info";

export class CharacterBuild {
    character: CharacterInfo;
    relics: RelicInfo[];

    constructor(character: CharacterInfo) {
        this.character = character;
        this.relics = [];
    }
}
  