import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DocumentazioneRoutingModule } from './documentazione.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentoComponent } from './documento/documento.component';
import { TitoloPaginaComponent } from './titolo-pagina/titolo-pagina.component';

import { RouterModule } from '@angular/router';
import { SafeUrlPipe } from '../safe-url.pipe';

@NgModule({
  declarations: [
    DocumentoComponent, 
    TitoloPaginaComponent, SafeUrlPipe
  ],
  imports: [
    DocumentazioneRoutingModule,
    CommonModule,
    RouterModule,
    PdfViewerModule,
  ],
  exports: [
    TitoloPaginaComponent,
    DocumentoComponent
  ]
})
export class DocumentazioneModule { }
