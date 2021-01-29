import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaParticolariComponent } from './categoria-particolari/categoria-particolari.component';
import { CaroselloComponent } from './carosello/carosello.component';

const routes: Routes = [
    {
      path: 'particolari-esecutivi',
      component: CaroselloComponent,
    },
    {
      path: 'particolari-esecutivi',
      component: CaroselloComponent,
    },
    {
      path: 'particolari-esecutivi',
      component: CaroselloComponent,
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ParticolariEsecutiviRoutingModule { }