import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DettaglioSoluzioneModule } from './dettaglio-soluzione/dettaglio-soluzione.module';
import { SoluzioniModule } from './soluzioni/soluzioni.module';

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
  }
];

@NgModule({
  imports: [
    DettaglioSoluzioneModule,
    SoluzioniModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
