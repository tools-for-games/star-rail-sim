import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./features/character-builder/character-simulation.module').then((m) => m.CharacterSimulationModule),
    },
];

