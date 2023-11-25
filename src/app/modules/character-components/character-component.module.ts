import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterRelicsComponent } from './character-relics/character-relics.component';
import { CharacterIconComponent } from './character-icon/character-icon.component';
import { CharacterManagerComponent } from './character-manager/character-manager.component';
import { CharacterSelectorComponent } from './character-selector/character-selector.component';
import { CharacterStatsComponent } from './character-stats/character-stats.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { RelicSetSelectorComponent } from './relic-set-selector/relic-set-selector.component';
import { EquipmentSlotSelectorComponent } from './relic-slot-selector/relic-slot-selector.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { EquipmentBuilderComponent } from './relic-builder/relic-builder.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { CharacterLightConeComponent } from './character-light-cone/character-light-cone.component';
import { LightConeSelectorComponent } from './light-cone-selector/light-cone-selector.component';

@NgModule({
    declarations: [
        CharacterManagerComponent,
        CharacterSelectorComponent,
        CharacterIconComponent,
        CharacterStatsComponent,
        CharacterRelicsComponent,
        RelicSetSelectorComponent,
        EquipmentSlotSelectorComponent,
        EquipmentBuilderComponent,
        CharacterLightConeComponent,
        LightConeSelectorComponent,
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
        CharacterRelicsComponent,
        RelicSetSelectorComponent,
        EquipmentSlotSelectorComponent,
        EquipmentBuilderComponent,
        CharacterLightConeComponent,
        LightConeSelectorComponent,
    ]
})
export class CharacterComponentModule { }
