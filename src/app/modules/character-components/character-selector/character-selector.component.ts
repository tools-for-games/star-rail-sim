import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { CharacterInfo } from '@shared/core/character-info';
import { Subscription } from 'rxjs';
import { CharacterBuildService } from '@shared/services/character-build.service';
import { CharacterBuild } from '@shared/core/builds/character-build';

@Component({
    selector: 'character-selector',
    templateUrl: './character-selector.component.html',
    styleUrls: ['./character-selector.component.less']
})
export class CharacterSelectorComponent implements OnDestroy {
    @Input() isVisible = false;
    @Output() isVisibleChange = new EventEmitter<boolean>();

    subscription = new Subscription();
    characters: CharacterInfo[] = [];
    createdCharacters: string[] = [];

    constructor(private characterBuildService: CharacterBuildService) {
        this.characters = this.characterBuildService.getCharacters();
        const createdCharacterSub = this.characterBuildService.getCreatedCharacters()
            .subscribe(values => this.createdCharacters = values.map(x => x.character.name));
        this.subscription.add(createdCharacterSub);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    cancel() {
        this.isVisibleChange.emit(false);
    }

    selectCharacter(character: CharacterInfo) {
        this.characterBuildService.createCharacter(new CharacterBuild(character));
        this.isVisibleChange.emit(false);
    }
}