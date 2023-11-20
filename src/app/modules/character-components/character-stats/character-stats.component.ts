import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CharacterBuild } from '@shared/core/builds/character-build';
import { CharacterBuildService } from '@shared/services/character-build.service';

@Component({
    selector: 'character-stats',
    templateUrl: './character-stats.component.html',
    styleUrls: ['./character-stats.component.less']
})
export class CharacterStatsComponent implements OnDestroy {
    subscription = new Subscription();
    currentCharacter: CharacterBuild | null = null;

    constructor(private characterBuildService: CharacterBuildService) {
        const characterSub = this.characterBuildService.getCurrentSelected()
            .subscribe(char => this.currentCharacter = char);
        this.subscription.add(characterSub);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }
}
