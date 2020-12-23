import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaParticolariComponent } from './categoria-particolari/categoria-particolari.component';

const routes: Routes = [
    {
      path: 'particolari-esecutivi',
      component: CategoriaParticolariComponent,
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ParticolariEsecutiviRoutingModule { }