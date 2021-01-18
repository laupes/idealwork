import { ParticolariEsecutiviRoutingModule } from './particolari-esecutivi-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CategoriaParticolariComponent } from './categoria-particolari/categoria-particolari.component';
import { CaroselloComponent } from './carosello/carosello.component';


@NgModule({
  declarations: [
    CategoriaParticolariComponent,
    CaroselloComponent
  ],
  imports: [
    ParticolariEsecutiviRoutingModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    CategoriaParticolariComponent,
    CaroselloComponent
  ]
})

export class ParticolariEsecutiviModule { }
