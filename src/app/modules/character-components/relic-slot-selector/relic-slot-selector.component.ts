import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EquipmentSlotType } from '@shared/core/equipment-slot-type';

@Component({
    selector: 'relic-slot-selector',
    templateUrl: './relic-slot-selector.component.html',
    styleUrls: ['./relic-slot-selector.component.less']
})
export class EquipmentSlotSelectorComponent {
    @Input() selected?: EquipmentSlotType;
    @Output() selectedChange = new EventEmitter<EquipmentSlotType>();
    
    equipmentSlotType = EquipmentSlotType;

    select(type: EquipmentSlotType) {
        this.selectedChange.emit(type);
    }
}
