import { Routes } from '@angular/router';
import { App } from './app';
import { FamiliasSection } from './secciones/familias/familias-section';
import { VeterinariosSection } from './secciones/veterinarios/veterinarios-section';
import { Home } from './secciones/home/home';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
        {
        path: 'familias',
        component: FamiliasSection
    },
    {
        path: 'veterinarios',
        component: VeterinariosSection
    },
];
