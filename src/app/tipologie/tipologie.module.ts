import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipologiaComponent } from './tipologia/tipologia.component';

import { RouterModule } from '@angular/router';
import { TipologieRoutingModule } from './tipologie.routing.module';

@NgModule({
  declarations: [TipologiaComponent],
  imports: [
    CommonModule,
    TipologieRoutingModule
  ],
  exports: [
    TipologiaComponent
  ]
})
export class TipologieModule { }
