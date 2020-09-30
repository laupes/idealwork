import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoluzioneComponent } from './soluzione/soluzione.component';

const routes: Routes = [
    {
      path: 'soluzioni',
      component: SoluzioneComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoluzioniRoutingModule { }