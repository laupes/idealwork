import { ColoriDisponibiliRoutingModule } from './colori-disponibil-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitoloComponent } from './titolo/titolo.component';
import { ListaColoriComponent } from './lista-colori/lista-colori.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TitoloComponent,
    ListaColoriComponent],
  imports: [
    ColoriDisponibiliRoutingModule,
    CommonModule,
    RouterModule
  ]
})
export class ColoriDisponibiliModule { }
