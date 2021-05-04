import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DocumentazioneRoutingModule } from './documentazione.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentoComponent } from './documento/documento.component';
import { TitoloPaginaComponent } from './titolo-pagina/titolo-pagina.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DocumentoComponent, 
    TitoloPaginaComponent
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
