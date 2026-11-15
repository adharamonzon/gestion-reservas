import { Routes } from '@angular/router';
import { MiPiscinaComponent } from './views/mi-piscina/mi-piscina.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'mi-piscina',
    pathMatch: 'full',
  },
  {
    path: 'mi-piscina',
    component: MiPiscinaComponent,
  },
];
