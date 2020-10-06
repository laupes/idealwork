import { RiepilogoOrdineRoutingModule } from './riepilogo-ordine-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitoloComponent } from './titolo/titolo.component';
import { ProdottoOrdineComponent } from './prodotto-ordine/prodotto-ordine.component';
import { PulsantiComponent } from './pulsanti/pulsanti.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TitoloComponent, 
    ProdottoOrdineComponent, 
    PulsantiComponent
  ],
  imports: [
    RiepilogoOrdineRoutingModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    TitoloComponent,
    ProdottoOrdineComponent,
    PulsantiComponent
  ]
})
export class RiepilogoOrdineModule { }
