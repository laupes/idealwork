import { BrowserModule } from '@angular/platform-browser';
import { EventEmitter, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

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
import { TipologieModule } from './tipologie/tipologie.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageFormAccessoComponent } from './page-form-accesso/page-form-accesso.component';
import { EncrDecrService } from './encr-decr-service.service';
import { TornaLoginComponent } from './404/torna-login/torna-login.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { ModalComponent } from './modal/modal.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DettaglioProdottoComponent,
    LoginComponent,
    PageNotFoundComponent,
    PageFormAccessoComponent,
    TornaLoginComponent,
    ModalComponent,
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
    CoreModule,
    PdfViewerModule,
    NoopAnimationsModule,
    MatSelectModule,
  ],
  providers: [
    EventEmitter,
    DataService,
    ChildrenOutletContexts,
    EncrDecrService,
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
