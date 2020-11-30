import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdineComponent } from './ordine/ordine.component';
import { PulsanteNuovoOrdineComponent } from './pulsante-nuovo-ordine/pulsante-nuovo-ordine.component';
import { TitoloComponent } from './titolo/titolo.component'

const routes: Routes = [
    {
      path: 'elenco-ordini',
      component: TitoloComponent,
      children: [
        { path: 'elenco-ordini',
          component: OrdineComponent,
          pathMatch: 'full'
        },
        { path: 'elenco-ordini',
          component: PulsanteNuovoOrdineComponent,
          pathMatch: 'full'
        }
      ],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElencoOrdiniRoutingModule { }