import { ParticolariEsecutiviRoutingModule } from './particolari-esecutivi-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaParticolariComponent } from './categoria-particolari/categoria-particolari.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CategoriaParticolariComponent
  ],
  imports: [
    ParticolariEsecutiviRoutingModule,
    CommonModule,
    RouterModule
  ]
})

export class ParticolariEsecutiviModule { }
