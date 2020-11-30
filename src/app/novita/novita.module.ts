import { NovitaRoutingModule } from './novita-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitoloComponent } from './titolo/titolo.component';
import { NuovoProdottoComponent } from './nuovo-prodotto/nuovo-prodotto.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TitoloComponent, 
    NuovoProdottoComponent
  ],
  imports: [
    NovitaRoutingModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    TitoloComponent,
    NuovoProdottoComponent
  ]
})

export class NovitaModule { }
