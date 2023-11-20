import { Component } from '@angular/core';
import { CharacterBuild } from '@shared/core/builds/character-build';
import { CharacterBuildService } from '@shared/services/character-build.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'character-manager',
    templateUrl: 'character-manager.component.html',
    styleUrls: ['character-manager.component.less']
})
export class CharacterManagerComponent {
    characters$: Observable<CharacterBuild[]>;
    selected$: Observable<CharacterBuild | null>;
    characterSelectorIsVisible = false;

    constructor(private characterBuildService: CharacterBuildService) {
        this.selected$ = characterBuildService.getCurrentSelected();
        this.characters$ = characterBuildService.getCreatedCharacters();
    }

    selectCharacter(build: CharacterBuild | null) {
        const charName = build?.character.name;
        if (charName) {
            this.characterBuildService.setCurrentSelected(charName);
        }
    }
}