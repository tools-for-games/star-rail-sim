import { Injectable } from '@angular/core';
import { CharacterInfo } from '../core/character-info';
import { BehaviorSubject, Observable } from 'rxjs';
import { CharacterBuild } from '../core/builds/character-build';
import { ALL_CHARACTERS } from '@shared/core/constants';
import { RelicInfo, RelicType } from '@shared/core/relic-info';

@Injectable({
    providedIn: 'root',
})
export class CharacterBuildService {
    // placeholder default values to test
    private currentSelected$ = new BehaviorSubject<CharacterBuild | null>(new CharacterBuild(ALL_CHARACTERS[0]));
    private createdCharacters$ = new BehaviorSubject<CharacterBuild[]>([new CharacterBuild(ALL_CHARACTERS[0])]);

    private replaceBuild(build: CharacterBuild) {
        const builds = this.createdCharacters$.value;
        const current = builds.find(x => x.character.name === build.character.name);

        // replace build
        if (current) {
            const index = builds.indexOf(current);
            if (index !== -1) {
                builds[index] = build;
                return;
            }
        }

        builds.push(build);

        // update observables
        this.createdCharacters$.next(builds);
        if (build.character.name === this.currentSelected$.value?.character.name) {
            this.currentSelected$.next(build);
        }
    }

    getCharacterBuild(characterName: string) {
        return this.createdCharacters$.value.find(x => x.character.name == characterName);
    }

    getCurrentSelected(): Observable<CharacterBuild | null> {
        return this.currentSelected$.asObservable();
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
        this.createdCharacters$.next([...this.createdCharacters$.value, character]);
    }

    setRelic(relics: RelicInfo[]) {
        const build = this.currentSelected$.value;
        if (!build) return;

        build.relics = [...relics];

        this.replaceBuild(build);
    }
}