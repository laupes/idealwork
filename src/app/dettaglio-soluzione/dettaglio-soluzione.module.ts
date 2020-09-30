import { DettaglioSoluzioneRoutingModule } from './dettaglio-soluzione-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitoloComponent } from './titolo/titolo.component';
import { ColoriComponent } from './colori/colori.component';
import { RouterModule } from '@angular/router';
import { OpzioneComponent } from './opzione/opzione.component';


@NgModule({
  declarations: [
    TitoloComponent, 
    ColoriComponent, 
    OpzioneComponent
  ],
  imports: [
    DettaglioSoluzioneRoutingModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    TitoloComponent,
    ColoriComponent
  ]
})
export class DettaglioSoluzioneModule { }
