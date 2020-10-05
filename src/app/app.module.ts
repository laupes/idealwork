import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SoluzioniModule } from './soluzioni/soluzioni.module';
import { DettaglioSoluzioneModule } from './dettaglio-soluzione/dettaglio-soluzione.module';
import { ChildrenOutletContexts } from '@angular/router';

import { OwlModule } from 'ngx-owl-carousel';
import { CategorieProdottoComponent } from './titolo/categorie-prodotto/categorie-prodotto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategorieProdottoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SoluzioniModule,
    DettaglioSoluzioneModule,
    OwlModule
  ],
  providers: [
    ChildrenOutletContexts
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
