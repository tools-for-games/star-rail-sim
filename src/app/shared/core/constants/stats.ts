import { Stat } from '../equipment-stat';
import { EquipmentSlotType } from '../equipment-slot-type';
import StatData from '../../data/equipments/stats.json';

export const STATS: Stat[] = StatData.map(x => ({
    id: x.id,
    name: x.name,
    icon: x.icon,
    isSubStat: x.isSubStat,
    mainValue: {
        slotTypes: x.mainValue.slotTypes as EquipmentSlotType[],
        values: x.mainValue.values
    }
})).sort((a, b) => {
    if (a.name > b.name)
        return 1;
    return -1;
});
