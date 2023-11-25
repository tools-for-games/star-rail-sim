import { Injectable } from '@angular/core';
import { CharacterInfo } from '../core/character-info';
import { BehaviorSubject, Observable } from 'rxjs';
import { CharacterBuild, EquipmentBuildStat, LightCone } from '../core/builds/character-build';
import { CHARACTERS } from '@shared/core/constants/characters';
import { EquipmentService } from './equipment.service';
import { LightConeInfo } from '@shared/core/light-cone-info';

const BUILDS_KEY = 'BUILDS_KEY';

@Injectable()
export class CharacterBuildService {
    private currentBuild$ = new BehaviorSubject<CharacterBuild | null>(null);
    private createdCharacters$ = new BehaviorSubject<CharacterBuild[]>([]);

    constructor(private equipmentService: EquipmentService) {
        this.loadBuildsFromLocalStorage();
        this.createdCharacters$.asObservable().subscribe(builds => {
            this.saveBuildsToLocalStorage(builds);
        })
    }

    private updateBuild(build: CharacterBuild) {
        const builds = this.createdCharacters$.value;
        const buildToUpdate = builds.find(x => x.characterId === build.characterId);

        // replace build
        if (buildToUpdate) {
            const index = builds.indexOf(buildToUpdate);
            if (index !== -1) {
                builds[index] = build;

                this.createdCharacters$.next(builds);
                // update current if selected
                if (build.characterId === this.currentBuild$.value?.characterId) {
                    this.currentBuild$.next(build);
                }
                return;
            }
        }

        // add new
        builds.push(build);
        this.createdCharacters$.next(builds);
    }

    private saveBuildsToLocalStorage(values: CharacterBuild[]) {
        const stringfiedValue = JSON.stringify(values);
        localStorage.setItem(BUILDS_KEY, stringfiedValue);
    }

    private loadBuildsFromLocalStorage() {
        const stringfiedValue = localStorage.getItem(BUILDS_KEY);
        if (stringfiedValue) {
            let builds: CharacterBuild[] = JSON.parse(stringfiedValue);
            this.createdCharacters$.next(builds);
            if (builds?.length > 0) {
                this.currentBuild$.next(builds[0])
            }
        }
    }

    getCharacterBuildValue(characterId: string) {
        return this.createdCharacters$.value.find(x => x.characterId == characterId);
    }

    getCharacterBuild(): Observable<CharacterBuild | null> {
        return this.currentBuild$.asObservable();
    }

    getCurrentCharacter(): CharacterInfo | null {
        const currentBuild = this.getCurrentBuildValue();
        const characters = this.getCharacters();
        return characters.find(x => x.id == currentBuild?.characterId) ?? null;
    }

    getCurrentLightConeValue(): LightConeInfo | null  {
        const lightCones = this.equipmentService.getLightCones();
        const build = this.getCurrentBuildValue();
        if (!build?.lightCone?.id) return null;

        return lightCones.find(x => x.id == build.lightCone?.id) ?? null;
    }

    getCurrentBuildValue(): CharacterBuild | null {
        return this.currentBuild$.value;
    }

    setSelectedCharacterBuild(characterId: string) {
        const build = this.getCharacterBuildValue(characterId);
        this.currentBuild$.next(build ?? null);
    }

    getCharacters(): CharacterInfo[] {
        return CHARACTERS;
    }

    getCharacterBuilds(): Observable<CharacterBuild[]> {
        return this.createdCharacters$.asObservable();
    }

    getCreatedCharacter(): CharacterInfo[] {
        const builds = this.createdCharacters$.value;
        const characters = this.getCharacters();
        return builds.map(b => characters.find(x => x.id == b.characterId) as CharacterInfo);
    }

    createCharacter(character: CharacterBuild) {
        const builds = [...this.createdCharacters$.value, character];
        this.createdCharacters$.next(builds);
        this.currentBuild$.next(character);
    }

    setRelic(relicIds: string[]) {
        const build = this.currentBuild$.value;
        if (!build) return;

        build.relicIds = relicIds;
        this.updateBuild(build);
    }

    setLightCone(lightCone: LightCone) {
        const build = this.currentBuild$.value;
        if (!build) return;

        build.lightCone = lightCone;
        this.updateBuild(build);

    }

    updateEquipmentBuildStat(value: EquipmentBuildStat) {
        const build = this.currentBuild$.value;
        if (!build) return;

        const currentEquipment = build.equipmentStats.find(x => x.equipmentSlotType == value.equipmentSlotType);
        if (!currentEquipment) return;

        const index = build.equipmentStats.indexOf(currentEquipment);
        if (index == -1) return;

        build.equipmentStats[index] = value;
        this.updateBuild(build);
    }
}