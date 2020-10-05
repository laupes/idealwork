import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitoloProdottoComponent } from './titolo-prodotto/titolo-prodotto.component';
import { ProdottoComponent } from './prodotto/prodotto.component';

const routes: Routes = [
    {
      path: 'lista-prodotti',
      component: TitoloProdottoComponent,
      children: [
        { path: 'lista-prodotti',
          component: ProdottoComponent,
          pathMatch: 'full'
        }
      ],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaProdottiRoutingModule { }