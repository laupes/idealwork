import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipologiaComponent } from './tipologia/tipologia.component';

const routes: Routes = [
    {
      path: 'tipologie',
      component: TipologiaComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipologieRoutingModule { }