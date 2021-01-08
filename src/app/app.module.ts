import { BrowserModule } from '@angular/platform-browser';
import { EventEmitter, NgModule } from '@angular/core';

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
import { NovitaModule } from './novita/novita.module';
import { ColoriDisponibiliModule } from './colori-disponibili/colori-disponibili.module';
import { CoreModule } from './core/core.module';
import { DataService } from './data.service';
import { VideoTutorialModule } from './video-tutorial/video-tutorial.module';
import { DocumentazioneModule } from './documentazione/documentazione.module';
import { ParticolariEsecutiviModule } from './particolari-esecutivi/particolari-esecutivi.module';

import { DettaglioProdottoComponent } from './dettaglio-prodotto/dettaglio-prodotto.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { TipologieModule } from './tipologie/tipologie.module';
import { CookieService } from 'ngx-cookie-service';

=======
>>>>>>> 4e2fc2a64c0b78a0df3782e87eccb1af28bdf7b7


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DettaglioProdottoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SoluzioniModule,
    DettaglioSoluzioneModule,
    CategorieProdottoModule,
    ListaProdottiModule,
    RiepilogoOrdineModule,
    ElencoOrdiniModule,
    NovitaModule,
    ColoriDisponibiliModule,
    FormsModule,
    TipologieModule,
    VideoTutorialModule,
    DocumentazioneModule,
    ParticolariEsecutiviModule,
    CoreModule
  ],
  providers: [
    EventEmitter,
    DataService,
    ChildrenOutletContexts,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
