import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SoluzioniModule } from './soluzioni/soluzioni.module';
import { DettaglioSoluzioneModule } from './dettaglio-soluzione/dettaglio-soluzione.module';
import { CategorieProdottoModule } from './categorie-prodotto/categorie-prodotto.module';
import { ListaProdottiModule } from './lista-prodotti/lista-prodotti.module';
import { ChildrenOutletContexts } from '@angular/router';
import { RiepilogoOrdineModule } from './riepilogo-ordine/riepilogo-ordine.module';
import { ElencoOrdiniModule } from './elenco-ordini/elenco-ordini.module';

import { DettaglioProdottoComponent } from './dettaglio-prodotto/dettaglio-prodotto.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DettaglioProdottoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SoluzioniModule,
    DettaglioSoluzioneModule,
    CategorieProdottoModule,
    ListaProdottiModule,
    RiepilogoOrdineModule,
    ElencoOrdiniModule
  ],
  providers: [
    ChildrenOutletContexts
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
