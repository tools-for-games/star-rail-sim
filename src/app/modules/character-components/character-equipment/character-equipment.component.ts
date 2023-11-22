import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharacterBuild, EquipmentBuildStat } from '@shared/core/builds/character-build';
import { EquipmentSlotType } from '@shared/core/equipment-slot-type';
import { RelicInfo, RelicType } from '@shared/core/relic-info';
import { CharacterBuildService } from '@shared/services/character-build.service';
import { RelicService } from '@shared/services/relic.service';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'character-equipment',
    templateUrl: './character-equipment.component.html',
    styleUrls: ['./character-equipment.component.less']
})
export class CharacterEquipmentComponent implements OnDestroy {
    subscription = new Subscription();

    addSetVisible: boolean = false;
    currentBuild: CharacterBuild | null = null;
    relicType = RelicType;

    selectedRelics: RelicInfo[] = [];

    currentEquipment?: EquipmentBuildStat;

    constructor(private characterBuildService: CharacterBuildService) {
        const sub = this.characterBuildService.getCurrentSelected()
            .subscribe((x) => this.buildChange(x));

        this.subscription.add(sub);
    }

    buildChange(build: CharacterBuild | null) {
        this.currentBuild = build;
        this.currentEquipment = build?.equipmentStats.find(x => x.equipmentSlotType == EquipmentSlotType.Head);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
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
        this.currentEquipment = this.currentBuild?.equipmentStats.find(x => x.equipmentSlotType == type);
    }

    equipmentBuildChange(value: EquipmentBuildStat) {
        this.characterBuildService.updateEquipmentBuildStat(value);
    }
}
