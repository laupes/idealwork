import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitoloComponent } from './titolo/titolo.component';
import { ProdottoOrdineComponent } from './prodotto-ordine/prodotto-ordine.component';
import { PulsantiComponent } from './pulsanti/pulsanti.component';

const routes: Routes = [
    {
      path: 'riepilogo-ordine',
      component: TitoloComponent,
      children: [
        { path: 'riepilogo-ordine',
          component: ProdottoOrdineComponent,
          pathMatch: 'full'
        },
        { path: 'riepilogo-ordine',
          component: PulsantiComponent,
          pathMatch: 'full'
        }
      ],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiepilogoOrdineRoutingModule { }