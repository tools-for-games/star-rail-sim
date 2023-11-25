import { Component, OnDestroy } from '@angular/core';
import { CharacterBuild, LightCone } from '@shared/core/builds/character-build';
import { CharacterInfo } from '@shared/core/character-info';
import { LightConeInfo } from '@shared/core/light-cone-info';
import { CharacterBuildService } from '@shared/services/character-build.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'character-light-cone',
    templateUrl: './character-light-cone.component.html',
    styleUrls: ['./character-light-cone.component.less']
})
export class CharacterLightConeComponent implements OnDestroy {
    subscription = new Subscription();
    selectorIsVisible = false;

    characterBuild: CharacterBuild | null = null;
    character: CharacterInfo | null = null;
    lightConeInfo?: LightConeInfo | null;
    lightCone?: LightCone;

    constructor(
        private characterBuildService: CharacterBuildService
    ) {
        const sub = characterBuildService.getCharacterBuild()
            .subscribe(build => {
                this.characterBuild = build;
                this.lightCone = build?.lightCone
                this.lightConeInfo = characterBuildService.getCurrentLightConeValue();
                this.character = this.characterBuildService.getCurrentCharacter();
            });

        this.subscription.add(sub);
    }

    changeLightCone(lightConeId: string) {
        this.characterBuildService.setLightCone({
            id: lightConeId,
            superimpose: 1
        });
        this.selectorIsVisible = false;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
