import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EquipmentSlotType } from '@shared/core/equipment-slot-type';

@Component({
    selector: 'equipment-slot-selector',
    templateUrl: './equipment-slot-selector.component.html',
    styleUrls: ['./equipment-slot-selector.component.less']
})
export class EquipmentSlotSelectorComponent {
    @Input() selected?: EquipmentSlotType;
    @Output() selectedChange = new EventEmitter<EquipmentSlotType>();
    
    equipmentSlotType = EquipmentSlotType;

    select(type: EquipmentSlotType) {
        this.selectedChange.emit(type);
    }
}
