import { DettaglioSoluzioneRoutingModule } from './dettaglio-soluzione-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitoloComponent } from './titolo/titolo.component';
import { ColoriComponent } from './colori/colori.component';
import { OpzioneComponent } from './opzione/opzione.component';
import { EsempioComponent } from './esempio/esempio.component';

import { RouterModule } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';


@NgModule({
  declarations: [
    TitoloComponent, 
    ColoriComponent, 
    OpzioneComponent, EsempioComponent
  ],
  imports: [
    DettaglioSoluzioneRoutingModule,
    CommonModule,
    RouterModule,
    OwlModule
  ],
  exports: [
    TitoloComponent,
    ColoriComponent
  ]
})
export class DettaglioSoluzioneModule { }
