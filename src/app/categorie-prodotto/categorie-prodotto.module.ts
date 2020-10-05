import { CategorieProdottoRoutingModule } from './categorie-prodotto-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitoloComponent } from './titolo/titolo.component';
import { CategoriaComponent } from './categoria/categoria.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TitoloComponent, 
    CategoriaComponent
  ],
  imports: [
    CategorieProdottoRoutingModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    TitoloComponent,
    CategoriaComponent
  ]
})
export class CategorieProdottoModule { }
