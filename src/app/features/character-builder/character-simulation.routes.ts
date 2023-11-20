import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterSimulationPage } from './pages/character-simulation.page';

const routes: Routes = [
    { path: '', component: CharacterSimulationPage },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CharacterSimulationRoutesModule { }
