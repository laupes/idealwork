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

import { OwlModule } from 'ngx-owl-carousel';
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
    OwlModule
  ],
  providers: [
    ChildrenOutletContexts
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
