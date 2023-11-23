import { Injectable } from '@angular/core';
import { CharacterInfo } from '../core/character-info';
import { BehaviorSubject, Observable } from 'rxjs';
import { CharacterBuild, EquipmentBuildStat } from '../core/builds/character-build';
import { ALL_CHARACTERS } from '@shared/core/constants';
import { RelicInfo } from '@shared/core/relic-info';

const BUILDS_KEY = 'BUILDS_KEY';

@Injectable()
export class CharacterBuildService {
    private currentSelected$ = new BehaviorSubject<CharacterBuild | null>(null);
    private createdCharacters$ = new BehaviorSubject<CharacterBuild[]>([]);

    constructor() {
        this.loadBuildsFromLocalStorage();
        this.createdCharacters$.asObservable().subscribe(builds => {
            this.saveBuildsToLocalStorage(builds);
        })
    }

    private updateBuild(build: CharacterBuild) {
        const builds = this.createdCharacters$.value;
        const current = builds.find(x => x.character.name === build.character.name);

        // replace build
        if (current) {
            const index = builds.indexOf(current);
            if (index !== -1) {
                builds[index] = build;
                this.createdCharacters$.next(builds);
                return;
            }
        }

        // add new
        builds.push(build);
        this.createdCharacters$.next(builds);
        if (build.character.name === this.currentSelected$.value?.character.name) {
            this.currentSelected$.next(build);
        }
    }

    private saveBuildsToLocalStorage(values: CharacterBuild[]) {
        const stringfiedValue = JSON.stringify(values);
        localStorage.setItem(BUILDS_KEY, stringfiedValue);
    }

    private loadBuildsFromLocalStorage() {
        const stringfiedValue = localStorage.getItem(BUILDS_KEY);
        if (stringfiedValue) {
            const builds: CharacterBuild[] = JSON.parse(stringfiedValue);
            this.createdCharacters$.next(builds);
            if (builds?.length > 0) {
                this.currentSelected$.next(builds[0])
            }
        }
    }

    getCharacterBuild(characterName: string) {
        return this.createdCharacters$.value.find(x => x.character.name == characterName);
    }

    getCurrentSelected(): Observable<CharacterBuild | null> {
        return this.currentSelected$.asObservable();
    }

    getCurrentSelectedValue(): CharacterBuild | null {
        return this.currentSelected$.value;
    }

    setCurrentSelected(characterName: string) {
        const build = this.getCharacterBuild(characterName);
        this.currentSelected$.next(build ?? null);
    }

    getCharacters(): CharacterInfo[] {
        return ALL_CHARACTERS;
    }

    getCreatedCharacters(): Observable<CharacterBuild[]> {
        return this.createdCharacters$.asObservable();
    }

    createCharacter(character: CharacterBuild) {
        const builds = [...this.createdCharacters$.value, character];
        this.createdCharacters$.next(builds);
        this.currentSelected$.next(character);
    }

    setRelic(relics: RelicInfo[]) {
        const build = this.currentSelected$.value;
        if (!build) return;

        build.relics = [...relics];
        this.updateBuild(build);
    }

    updateEquipmentBuildStat(value: EquipmentBuildStat) {
        const build = this.currentSelected$.value;
        if (!build) return;

        const currentEquipment = build.equipmentStats.find(x => x.equipmentSlotType == value.equipmentSlotType);
        if (!currentEquipment) return;

        const index = build.equipmentStats.indexOf(currentEquipment);
        if (index == -1) return;

        build.equipmentStats[index] = value;
        this.updateBuild(build);
    }
}