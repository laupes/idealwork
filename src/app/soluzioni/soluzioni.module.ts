import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoluzioneComponent } from './soluzione/soluzione.component';
import { RouterModule } from '@angular/router';
import { SoluzioniRoutingModule } from './soluzioni-routing.module';


@NgModule({
  declarations: [
    SoluzioneComponent,
  ],
  imports: [
    CommonModule,
    SoluzioniRoutingModule,
  ],
  exports: [
    SoluzioneComponent
  ],
})
export class SoluzioniModule { }
