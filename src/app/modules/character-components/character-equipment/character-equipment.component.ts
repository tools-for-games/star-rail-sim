import { Component, OnInit } from '@angular/core';
import { CharacterBuild, EquipmentBuildStat } from '@shared/core/builds/character-build';
import { EquipmentSlotType } from '@shared/core/equipment-slot-type';
import { RelicInfo, RelicType } from '@shared/core/relic-info';
import { CharacterBuildService } from '@shared/services/character-build.service';
import { RelicService } from '@shared/services/relic.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'character-equipment',
    templateUrl: './character-equipment.component.html',
    styleUrls: ['./character-equipment.component.less']
})
export class CharacterEquipmentComponent implements OnInit {
    addSetVisible: boolean = false;
    relics: RelicInfo[];
    planetaryOrnaments: RelicInfo[];
    currentBuild$: Observable<CharacterBuild | null>;
    relicType = RelicType;

    selectedRelics: RelicInfo[] = [];

    statList = ['CRIT Rate', 'CRIT Dmg', 'ATK', 'ATK Rate', 'Effect Hit Rate'];

    selectedEquipmentSlot: EquipmentSlotType = EquipmentSlotType.Head;
    currentEquipment?: EquipmentBuildStat;

    constructor(
        private relicService: RelicService,
        private characterBuildService: CharacterBuildService
    ) {
        this.relics = this.relicService.getRelics();
        this.planetaryOrnaments = this.relicService.getPlanetaryOrnaments();
        this.currentBuild$ = this.characterBuildService.getCurrentSelected();
    }

    ngOnInit(): void {
        this.changeEquipmentSlot(this.selectedEquipmentSlot);
    }

    pieceCount(relic: RelicInfo): number {
        if (relic.type === RelicType.PlanetaryOrnamentSet)
            return 2;
        return 4 / this.selectedRelics.filter(x => x.type == relic.type).length;
    }

    visibilityChange(isVisible: boolean) {
        if (!isVisible) {
            this.characterBuildService.setRelic(this.selectedRelics);
        }
    }

    changeEquipmentSlot(type: EquipmentSlotType) {
        const current = this.characterBuildService.getCurrentSelectedValue()
        this.currentEquipment = current?.equipmentStats.find(x => x.equipmentSlotType == type)
    }
}
