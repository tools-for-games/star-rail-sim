import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LightConeInfo } from '@shared/core/light-cone-info';
import { EquipmentService } from '@shared/services/equipment.service';

@Component({
    selector: 'light-cone-selector',
    templateUrl: './light-cone-selector.component.html',
    styleUrls: ['./light-cone-selector.component.less']
})
export class LightConeSelectorComponent {
    @Input() path?: string;
    @Input() selected?: string;
    @Output() selectedChange = new EventEmitter<string>();
    
    allLightCones: LightConeInfo[];

    constructor(equipmentService: EquipmentService) {
        this.allLightCones = equipmentService.getLightCones();
    }

    clickLightCone(lightConeId: string) {
        this.selectedChange.emit(lightConeId);
    }
}
