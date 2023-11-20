import { CharacterInfo } from './character-info';
import { RelicInfo, RelicType } from './relic-info';

import TopazData from '../data/characters/topaz_numby.json';
import FuXuanData from '../data/characters/fu_xuan.json';

import RelicsData from '../data/equipments/relics.json';
import PlanetaryOrnamentData from '../data/equipments/planetary_ornament.json';

export const ALL_CHARACTERS: CharacterInfo[] = [TopazData, FuXuanData];

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