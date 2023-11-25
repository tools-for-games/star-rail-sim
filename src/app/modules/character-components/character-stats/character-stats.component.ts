import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CharacterBuild } from '@shared/core/builds/character-build';
import { CharacterBuildService } from '@shared/services/character-build.service';
import { STATS } from '@shared/core/constants/stats';
import { StatType } from '@shared/core/builds/stat-type';
import { CharacterInfo } from '@shared/core/character-info';

@Component({
    selector: 'character-stats',
    templateUrl: './character-stats.component.html',
    styleUrls: ['./character-stats.component.less']
})
export class CharacterStatsComponent implements OnDestroy {
    subscription = new Subscription();
    build: CharacterBuild | null = null;
    characterInfo?: CharacterInfo;

    constructor(private characterBuildService: CharacterBuildService) {
        const characterSub = this.characterBuildService.getCharacterBuild()
            .subscribe(build => {
                this.build = build;
                this.createStatsProfile(build);
            });
        this.subscription.add(characterSub);
    }

    createStatsProfile(build: CharacterBuild | null) {
        const equips = build?.equipmentStats;

        const getValueFromMainStat = (id: string): number => {
            const equipsWithStat = equips?.filter(x => x.mainStat == id);
            if (!equipsWithStat?.length) return 0;

            const statMainValues = STATS.find(x => x.id == id)?.mainValue.values;
            if (!statMainValues) return 0;

            const rarities = equipsWithStat.map(e => e.rarity);

            return rarities.map(r => statMainValues.find(x => x.rarity == r)?.value)
                .reduce((acc, v) => (acc ?? 0) + (v ?? 0)) ?? 0;
        };

        const getValueFromSubStat = (value: string): number => {
            const values = equips?.flatMap(x => x.values.filter(s => s.stat == value).map(s => s.value));
            if (!values?.length) return 0;

            return values.reduce((acc, v) => acc + v);
        };

        console.log(getValueFromMainStat(StatType.Hp) + getValueFromSubStat(StatType.Hp));

        // const stats: { [key: string]: number } = {};
        // Object.values(StatType).forEach(v => {
        //     stats[v] = getValueFromMainStat(v) + getValueFromSubStat(v);
        // });

        // console.log(stats);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }
}
