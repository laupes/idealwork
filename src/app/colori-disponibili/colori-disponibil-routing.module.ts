import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitoloComponent } from './titolo/titolo.component';
import { ListaColoriComponent } from './lista-colori/lista-colori.component';

const routes: Routes = [
    {
      path: 'colori-disponibili',
      component: TitoloComponent,
      children: [
        { path: 'colori-disponibili',
          component: ListaColoriComponent,
          pathMatch: 'full'
        }
      ],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColoriDisponibiliRoutingModule { }