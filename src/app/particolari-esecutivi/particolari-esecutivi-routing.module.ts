import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaParticolariComponent } from './categoria-particolari/categoria-particolari.component';
import { CaroselloComponent } from './carosello/carosello.component';

const routes: Routes = [
    {
      path: 'particolari-esecutivi',
      component: CategoriaParticolariComponent,
    },
    {
      path: 'preparazioni',
      component: CaroselloComponent,
    },
    {
      path: 'applicazioni',
      component: CaroselloComponent,
    },
    {
      path: 'protezioni',
      component: CaroselloComponent,
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ParticolariEsecutiviRoutingModule { }