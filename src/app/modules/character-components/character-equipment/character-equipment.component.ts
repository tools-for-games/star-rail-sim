import { Component } from '@angular/core';
import { CharacterBuild } from '@shared/core/builds/character-build';
import { RelicInfo, RelicType } from '@shared/core/relic-info';
import { CharacterBuildService } from '@shared/services/character-build.service';
import { RelicService } from '@shared/services/relic.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'character-equipment',
    templateUrl: './character-equipment.component.html',
    styleUrls: ['./character-equipment.component.less']
})
export class CharacterEquipmentComponent {
    addSetVisible: boolean = false;
    relics: RelicInfo[];
    planetaryOrnaments: RelicInfo[];
    currentBuild$: Observable<CharacterBuild | null>;
    relicType = RelicType;

    selectedRelics: RelicInfo[] = [];

    pieceCount(relic: RelicInfo): number {
        if (relic.type === RelicType.PlanetaryOrnamentSet)
            return 2;
        return 4 / this.selectedRelics.filter(x => x.type == relic.type).length;
    }

    constructor(
        private relicService: RelicService,
        private characterBuildService: CharacterBuildService
    ) {
        this.relics = this.relicService.getRelics();
        this.planetaryOrnaments = this.relicService.getPlanetaryOrnaments();
        this.currentBuild$ = this.characterBuildService.getCurrentSelected();
    }

    visibilityChange(isVisible: boolean) {
        if (!isVisible) {
            this.characterBuildService.setRelic(this.selectedRelics);
        }
    }
}
