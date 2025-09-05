import { Routes } from '@angular/router';
import { App } from './app';
import { FamiliasSection } from './secciones/familias/familias-section';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: App
    },
        {
        path: 'familias',
        component: FamiliasSection
    },
];
