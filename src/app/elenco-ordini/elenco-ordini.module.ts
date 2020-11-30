import { ElencoOrdiniRoutingModule } from './elenco-ordini-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdineComponent } from './ordine/ordine.component';
import { PulsanteNuovoOrdineComponent } from './pulsante-nuovo-ordine/pulsante-nuovo-ordine.component';
import { TitoloComponent } from './titolo/titolo.component';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OrdineComponent, 
    PulsanteNuovoOrdineComponent, 
    TitoloComponent
  ],
  imports: [
    ElencoOrdiniRoutingModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    OrdineComponent, 
    PulsanteNuovoOrdineComponent,
    TitoloComponent
  ]  
})
export class ElencoOrdiniModule { }
