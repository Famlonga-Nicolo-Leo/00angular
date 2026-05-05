import { Routes } from '@angular/router';
import { Generic } from './generic/generic';
export const routes: Routes = [
    { path: 'generic/:id', component: Generic },
    {path: '**', redirectTo: 'generic/' }
];
