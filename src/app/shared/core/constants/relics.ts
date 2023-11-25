import { RelicInfo, RelicType } from '../relic-info';
import RelicsData from '../../data/equipments/relics.json';
import PlanetaryOrnamentData from '../../data/equipments/planetary_ornament.json';

export const PLANETARY_ORNAMENTS: RelicInfo[] = PlanetaryOrnamentData.map(x => ({
    id: x.id,
    effect: x.effect,
    icon: x.icon,
    name: x.name,
    type: x.type as RelicType
})).sort((a, b) => {
    if (a.name > b.name)
        return 1;
    if (a.name < b.name)
        return -1;
    return 0;
});


export const RELICS: RelicInfo[] = RelicsData.map(x => ({
    id: x.id,
    effect: x.effect,
    icon: x.icon,
    name: x.name,
    type: x.type as RelicType
})).sort((a, b) => {
    if (a.name > b.name)
        return 1;
    if (a.name < b.name)
        return -1;
    return 0;
});
