import { Component, OnDestroy } from '@angular/core';
import { CharacterBuild, EquipmentBuildStat } from '@shared/core/builds/character-build';
import { EquipmentSlotType } from '@shared/core/equipment-slot-type';
import { RelicInfo, RelicType } from '@shared/core/relic-info';
import { CharacterBuildService } from '@shared/services/character-build.service';
import { EquipmentService } from '@shared/services/equipment.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'character-relics',
    templateUrl: './character-relics.component.html',
    styleUrls: ['./character-relics.component.less']
})
export class CharacterRelicsComponent implements OnDestroy {
    subscription = new Subscription();

    addSetVisible: boolean = false;
    currentBuild: CharacterBuild | null = null;
    relicType = RelicType;

    currentEquipment?: EquipmentBuildStat;
    private allRelics: RelicInfo[] = [];
    currentRelics: RelicInfo[] = [];

    constructor(
        private characterBuildService: CharacterBuildService,
        equipmentService: EquipmentService
    ) {
        this.allRelics = [...equipmentService.getRelics(), ...equipmentService.getPlanetaryOrnaments()];

        const sub = this.characterBuildService.getCharacterBuild()
            .subscribe((x) => this.buildChange(x));

        this.subscription.add(sub);
    }

    buildChange(build: CharacterBuild | null) {
        this.currentBuild = build;
        if (!build) return;
        this.currentEquipment = build?.equipmentStats.find(x => x.equipmentSlotType == EquipmentSlotType.Head);
        this.currentRelics = this.allRelics.filter(x => build?.relicIds?.includes(x.id));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    pieceCount(relic: RelicInfo): number {
        if (!this.currentBuild) return 0;

        if (relic.type === RelicType.PlanetaryOrnamentSet)
            return 2;
        
        return 4 / this.currentRelics.filter(x => x.type == relic.type).length;
    }

    changeEquipmentSlot(type: EquipmentSlotType) {
        this.currentEquipment = this.currentBuild?.equipmentStats.find(x => x.equipmentSlotType == type);
    }

    equipmentBuildChange(value: EquipmentBuildStat) {
        this.characterBuildService.updateEquipmentBuildStat(value);
    }

    relicChange(relics: any) {
        this.characterBuildService.setRelic(relics);
    }
}
