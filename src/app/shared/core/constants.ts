import { CharacterInfo } from './character-info';
import { RelicInfo, RelicType } from './relic-info';
import { Stat } from './equipment-stat';

import TopazData from '../data/characters/topaz_numby.json';
import FuXuanData from '../data/characters/fu_xuan.json';
import Bronya from '../data/characters/bronya.json';
import JingYuan from '../data/characters/jing_yuan.json';

import RelicsData from '../data/equipments/relics.json';
import PlanetaryOrnamentData from '../data/equipments/planetary_ornament.json';

import StatData from '../data/equipments/stats.json';
import { EquipmentSlotType } from './equipment-slot-type';

export const ALL_CHARACTERS: CharacterInfo[] = [TopazData, FuXuanData, Bronya, JingYuan];

export const ALL_RELICS: RelicInfo[] = RelicsData.map(x => ({
    effect: x.effect,
    icon: x.icon,
    name: x.name,
    type: x.type as RelicType
})).sort((a,b) => {
    if (a.name > b.name)
        return 1;
    if (a.name < b.name)
        return -1;
    return 0;
});

export const ALL_PLANETARY_ORNAMENTS: RelicInfo[] = PlanetaryOrnamentData.map(x => ({
    effect: x.effect,
    icon: x.icon,
    name: x.name,
    type: x.type as RelicType
})).sort((a,b) => {
    if (a.name > b.name)
        return 1;
    if (a.name < b.name)
        return -1;
    return 0;
});

export const STATS: Stat[] = StatData.map(x => ({
    name: x.name,
    icon: x.icon,
    isSubStat: x.isSubStat,
    mainValue: {
        slotTypes: x.mainValue.slotTypes as EquipmentSlotType[],
        values: x.mainValue.values
    }
}));