import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterSimulationRoutesModule } from './character-simulation.routes';
import { CharacterSimulationPage } from './pages/character-simulation.page';
import { CharacterComponentModule } from 'src/app/modules/character-components/character-component.module';


@NgModule({
    providers: [],
    declarations: [
        CharacterSimulationPage
    ],
    imports: [
        CommonModule,
        CharacterComponentModule,
        CharacterSimulationRoutesModule
    ]
})
export class CharacterSimulationModule { }
