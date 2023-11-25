import { Component, OnDestroy } from '@angular/core';
import { CharacterBuild } from '@shared/core/builds/character-build';
import { CharacterInfo } from '@shared/core/character-info';
import { CharacterBuildService } from '@shared/services/character-build.service';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'character-manager',
    templateUrl: 'character-manager.component.html',
    styleUrls: ['character-manager.component.less']
})
export class CharacterManagerComponent implements OnDestroy {
    subscription = new Subscription();
    currentCharacterBuild$: Observable<CharacterBuild | null>;
    characterSelectorIsVisible = false;
    createCharacters: CharacterInfo[] = [];

    constructor(private characterBuildService: CharacterBuildService) {
        this.currentCharacterBuild$ = characterBuildService.getCharacterBuild();
        const sub = characterBuildService.getCharacterBuilds().subscribe(x => {
            this.createCharacters = characterBuildService.getCreatedCharacter();
        });

        this.subscription.add(sub);
    }

    selectCharacter(characterId: string) {
        if (characterId) {
            this.characterBuildService.setSelectedCharacterBuild(characterId);
        }
    }
    
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}