import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DettaglioSoluzioneModule } from './dettaglio-soluzione/dettaglio-soluzione.module';
import { SoluzioniModule } from './soluzioni/soluzioni.module';
import { CategorieProdottoModule } from './categorie-prodotto/categorie-prodotto.module';
import { ListaProdottiModule } from './lista-prodotti/lista-prodotti.module';

import { DettaglioProdottoComponent } from './dettaglio-prodotto/dettaglio-prodotto.component';

const routes: Routes = [
  {
    path: 'soluzioni',
    loadChildren: 'src/app/soluzioni/soluzioni.module#SoluzioniModule',
    pathMatch: 'full'
  },
  { 
    path: '', 
    redirectTo: 'soluzioni', 
    pathMatch: 'full' 
  },
  {
    path: 'dettaglio-soluzione',
    loadChildren: 'src/app/dettaglio-soluzione/dettaglio-soluzione.module#DettaglioSoluzioneModule'
  },
  {
    path: 'categorie-prodotto',
    loadChildren: 'src/app/categorie-prodotto/categorie-prodotto.module#CategorieProdottoModule'
  },
  {
    path: 'lista-prodotti',
    loadChildren: 'src/app/lista-prodotti/lista-prodotti.module#ListaProdottiModule'
  },
  {
    path: 'prodotto',
    component: DettaglioProdottoComponent
  }
];

@NgModule({
  imports: [
    DettaglioSoluzioneModule,
    SoluzioniModule,
    CategorieProdottoModule,
    ListaProdottiModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
