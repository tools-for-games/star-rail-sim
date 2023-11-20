import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RelicInfo, RelicType } from '@shared/core/relic-info';
import { RelicService } from '@shared/services/relic.service';

@Component({
    selector: 'relic-set-selector',
    templateUrl: './relic-set-selector.component.html',
    styleUrls: ['./relic-set-selector.component.less']
})
export class RelicSetSelectorComponent {
    @Input() selected: RelicInfo[] = [];
    @Output() selectedChange = new EventEmitter<RelicInfo[]>();

    relics: RelicInfo[];
    planetaryOrnaments: RelicInfo[];

    constructor(
        private relicService: RelicService,
    ) {
        this.relics = this.relicService.getRelics();
        this.planetaryOrnaments = this.relicService.getPlanetaryOrnaments();
    }

    canAddRelic() {
        return this.selected.filter(x => x.type === RelicType.RelicSet)?.length < 2;
    }

    canAddPlanetaryOrnament() {
        return !this.selected.filter(x => x.type === RelicType.PlanetaryOrnamentSet)?.length;
    }

    clickRelic(relicInfo: RelicInfo) {
        const index = this.selected.indexOf(relicInfo)
        if (index != -1) {
            this.selected.splice(index, 1);
            return;
        }

        if (relicInfo.type === RelicType.RelicSet && !this.canAddRelic()) {
            return;
        }
        if (relicInfo.type === RelicType.PlanetaryOrnamentSet && !this.canAddPlanetaryOrnament()) {
            return;
        }

        this.selected.push(relicInfo);
    }
}
