import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentoComponent } from './documento/documento.component';
import { TitoloPaginaComponent } from './titolo-pagina/titolo-pagina.component';


const routes: Routes = [
    {
      path: 'documentazione',
      component: TitoloPaginaComponent,
      children: [
        { path: 'documentazione',
          component: DocumentoComponent,
          pathMatch: 'full'
        }
      ],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentazioneRoutingModule { }