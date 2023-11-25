import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EquipmentBuildStat } from '@shared/core/builds/character-build';
import { STATS } from '@shared/core/constants/stats';

@Component({
    selector: 'relic-builder',
    templateUrl: './relic-builder.component.html',
    styleUrls: ['./relic-builder.component.less']
})
export class EquipmentBuilderComponent {
    @Input({ required: true })
    equipmentBuild!: EquipmentBuildStat;
    @Output()
    equipmentBuildChange = new EventEmitter<EquipmentBuildStat>();

    private allStats = STATS;
    subStats = this.allStats.filter(x => x.isSubStat);

    getMainStats() {
        return this.allStats.filter(x => x.mainValue.slotTypes.includes(this.equipmentBuild.equipmentSlotType));
    }

    getAvailableSubStats(index: number) {
        const currentSelectedStat = this.equipmentBuild.values[index]?.stat;
        const selected = this.equipmentBuild.values.map(v => v.stat);
        return this.subStats
            .filter(x => !selected.includes(x.id) || currentSelectedStat === x.id)
            .filter(x => this.equipmentBuild.mainStat !== x.id);
    }

    getMainValue() {
        const currentStat = this.allStats.find(x => x.id === this.equipmentBuild.mainStat);
        return currentStat?.mainValue.values.find(x => x.rarity === this.equipmentBuild.rarity)?.value;
    }

    setRarity(value: number) {
        this.equipmentBuild.rarity = value;
    }

    mainStatChange(value: any) {
        this.equipmentBuild.mainStat = value;
        this.equipmentBuildChange.emit(this.equipmentBuild);
    }

    subStatChange(index: number, stat: any) {
        const current = this.equipmentBuild.values[index];
        this.equipmentBuild.values[index] = { stat: stat, value: current?.value };
        this.equipmentBuildChange.emit(this.equipmentBuild);
    }

    subStatValueChange(index: number, value: any) {
        const current = this.equipmentBuild.values[index];
        this.equipmentBuild.values[index] = { stat: current?.stat, value: value };
        this.equipmentBuildChange.emit(this.equipmentBuild);
    }
}
