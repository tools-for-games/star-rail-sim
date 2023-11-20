import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'character-simulator',
        loadChildren: () =>
            import('./features/character-builder/character-simulation.module').then((m) => m.CharacterSimulationModule),
    },
    {
        path: '**',
        redirectTo: 'character-simulator',
        pathMatch: 'full',
    },
];

