import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitoloComponent } from './titolo/titolo.component';
import { NuovoProdottoComponent } from './nuovo-prodotto/nuovo-prodotto.component';

const routes: Routes = [
    {
      path: 'novità',
      component: TitoloComponent,
      children: [
        { path: 'novità',
          component: NuovoProdottoComponent,
          pathMatch: 'full'
        }
      ],
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class NovitaRoutingModule { }