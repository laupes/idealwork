import { ListaProdottiRoutingModule } from './lista-prodotti-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdottoComponent } from './prodotto/prodotto.component';
import { TitoloProdottoComponent } from './titolo-prodotto/titolo-prodotto.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProdottoComponent, 
    TitoloProdottoComponent
  ],
  imports: [
    ListaProdottiRoutingModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    ProdottoComponent,
    TitoloProdottoComponent
  ]
})
export class ListaProdottiModule { }
