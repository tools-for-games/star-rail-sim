import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterEquipmentComponent } from './character-equipment/character-equipment.component';
import { CharacterIconComponent } from './character-icon/character-icon.component';
import { CharacterManagerComponent } from './character-manager/character-manager.component';
import { CharacterSelectorComponent } from './character-selector/character-selector.component';
import { CharacterStatsComponent } from './character-stats/character-stats.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { RelicSetSelectorComponent } from './relic-set-selector/relic-set-selector.component';
import { EquipmentSlotSelectorComponent } from './equipment-slot-selector/equipment-slot-selector.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { EquipmentBuilderComponent } from './equipment-builder/equipment-builder.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@NgModule({
    declarations: [
        CharacterManagerComponent,
        CharacterSelectorComponent,
        CharacterIconComponent,
        CharacterStatsComponent,
        CharacterEquipmentComponent,
        RelicSetSelectorComponent,
        EquipmentSlotSelectorComponent,
        EquipmentBuilderComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        NzModalModule,
        NzButtonModule,
        NzPopoverModule,
        NzSelectModule,
        NzRadioModule,
        NzInputModule
    ],
    exports: [
        CharacterManagerComponent,
        CharacterSelectorComponent,
        CharacterIconComponent,
        CharacterStatsComponent,
        CharacterEquipmentComponent,
        RelicSetSelectorComponent,
        EquipmentSlotSelectorComponent,
        EquipmentBuilderComponent,
    ]
})
export class CharacterComponentModule { }
