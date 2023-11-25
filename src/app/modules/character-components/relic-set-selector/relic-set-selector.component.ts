import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RelicInfo, RelicType } from '@shared/core/relic-info';
import { EquipmentService } from '@shared/services/equipment.service';

@Component({
    selector: 'relic-set-selector',
    templateUrl: './relic-set-selector.component.html',
    styleUrls: ['./relic-set-selector.component.less']
})
export class RelicSetSelectorComponent {
    @Input() selected: string[] = [];
    @Output() selectedChange = new EventEmitter<string[]>();

    relics: RelicInfo[];
    planetaryOrnaments: RelicInfo[];
    private allRelics: RelicInfo[];

    constructor(
        private equipmentService: EquipmentService,
    ) {
        this.relics = this.equipmentService.getRelics();
        this.planetaryOrnaments = this.equipmentService.getPlanetaryOrnaments();
        this.allRelics = [...this.relics, ...this.planetaryOrnaments];
    }

    canAddRelic() : boolean {
        const selectedRelics = this.allRelics.filter(x => this.selected.includes(x.id));
        return selectedRelics.filter(x => x.type === RelicType.RelicSet)?.length < 2;
    }

    canAddPlanetaryOrnament() : boolean {
        const selectedRelics = this.allRelics.filter(x => this.selected.includes(x.id));
        return !selectedRelics.filter(x => x.type === RelicType.PlanetaryOrnamentSet)?.length;
    }

    isRelicSelected(relicId: string): boolean {
        return !!this.selected.includes(relicId);
    }

    clickRelic(relicId: string) {
        const newSelection = [...this.selected];

        const index = newSelection.indexOf(relicId);
        if (index != -1) {
            newSelection.splice(index, 1);
            this.selectedChange.emit(newSelection);
            return;
        }
        
        const relicInfo = this.allRelics.find(x => x.id == relicId);
        if (!relicInfo) return;

        if (relicInfo.type === RelicType.RelicSet && !this.canAddRelic()) {
            return;
        }
        if (relicInfo.type === RelicType.PlanetaryOrnamentSet && !this.canAddPlanetaryOrnament()) {
            return;
        }

        newSelection.push(relicId);
        this.selectedChange.emit(newSelection);
    }
}
