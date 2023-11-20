import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { CharacterEquipmentComponent } from './character-equipment/character-equipment.component';
import { CharacterIconComponent } from './character-icon/character-icon.component';
import { CharacterManagerComponent } from './character-manager/character-manager.component';
import { CharacterSelectorComponent } from './character-selector/character-selector.component';
import { CharacterStatsComponent } from './character-stats/character-stats.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { RelicSetSelectorComponent } from './relic-set-selector/relic-set-selector.component';

@NgModule({
    declarations: [
        CharacterManagerComponent,
        CharacterSelectorComponent,
        CharacterIconComponent,
        CharacterStatsComponent,
        CharacterEquipmentComponent,
        RelicSetSelectorComponent,
    ],
    imports: [
        CommonModule,
        A11yModule,
        NzModalModule,
        NzButtonModule,
        NzPopoverModule,
    ],
    exports: [
        CharacterManagerComponent,
        CharacterSelectorComponent,
        CharacterIconComponent,
        CharacterStatsComponent,
        CharacterEquipmentComponent,
        RelicSetSelectorComponent
    ]
})
export class CharacterComponentModule { }