import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitoloComponent } from './titolo/titolo.component';
import { CategoriaComponent } from './categoria/categoria.component';

const routes: Routes = [
    {
      path: 'categorie-prodotto',
      component: TitoloComponent,
      children: [
        { path: 'categorie-prodotto',
          component: CategoriaComponent,
          pathMatch: 'full'
        }
      ],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieProdottoRoutingModule { }