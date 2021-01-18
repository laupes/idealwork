import { AuthGuardService as AuthGuard} from './auth-guard.service';
import { PageFormAccessoComponent } from './page-form-accesso/page-form-accesso.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DettaglioSoluzioneModule } from './dettaglio-soluzione/dettaglio-soluzione.module';
import { SoluzioniModule } from './soluzioni/soluzioni.module';
import { CategorieProdottoModule } from './categorie-prodotto/categorie-prodotto.module';
import { ListaProdottiModule } from './lista-prodotti/lista-prodotti.module';
import { RiepilogoOrdineModule } from './riepilogo-ordine/riepilogo-ordine.module';
import { ElencoOrdiniModule } from './elenco-ordini/elenco-ordini.module';
import { NovitaModule } from './novita/novita.module';
import { ColoriDisponibiliModule } from './colori-disponibili/colori-disponibili.module';
import { TipologieModule } from './tipologie/tipologie.module';
import { DocumentazioneModule } from './documentazione/documentazione.module';

import { DettaglioProdottoComponent } from './dettaglio-prodotto/dettaglio-prodotto.component';
import { LoginComponent } from './login/login.component';
import { VideoTutorialModule } from './video-tutorial/video-tutorial.module';
import { ParticolariEsecutiviModule } from './particolari-esecutivi/particolari-esecutivi.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'soluzioni',
    loadChildren: sessionStorage.getItem('token') !== null ? 'src/app/soluzioni/soluzioni.module#SoluzioniModule' : 'src/app/404/404.module#TornaLoginModule',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'login',
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
    component: sessionStorage.getItem('token') ? DettaglioProdottoComponent : PageNotFoundComponent
  },
  {
    path: 'riepilogo-ordine',
    loadChildren: 'src/app/riepilogo-ordine/riepilogo-ordine.module#RiepilogoOrdineModule'
  },
  {
    path: 'elenco-ordini',
    loadChildren: 'src/app/elenco-ordini/elenco-ordini.module#ElencoOrdiniModule'
  },
  {
    path: 'novita',
    loadChildren: 'src/app/novita/novita.module#NovitaModule'
  },
  {
    path: 'colori-disponibili',
    loadChildren: 'src/app/novita/novita.module#NovitaModule'
  },
  {
    path: 'tipologie',
    loadChildren: 'src/app/tipologie/tipologie.module#TipologieModule'
  },
  {
    path: 'video-tutorial',
    loadChildren: 'src/app/video-tutorial/video-tutorial-module#VideoTutorialModule'
  },
  {
    path: 'documentazione',
    loadChildren: 'src/app/documentazione/documentazione-module#DocumentazioneModule'
  },
  {
    path: 'particolari-esecutivi',
    loadChildren: 'src/app/particolari-esecutivi/particolari-esecutivi-module#ParticolariEsecutiviModule'
  },
  {
    path: 'reimposta-password',
    component: PageFormAccessoComponent,
  },
  {
    path: 'pagina-non-trovata',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    DettaglioSoluzioneModule,
    SoluzioniModule,
    CategorieProdottoModule,
    ListaProdottiModule,
    RiepilogoOrdineModule,
    ElencoOrdiniModule,
    NovitaModule,
    ColoriDisponibiliModule,
    TipologieModule,
    VideoTutorialModule,
    DocumentazioneModule,
    ParticolariEsecutiviModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
