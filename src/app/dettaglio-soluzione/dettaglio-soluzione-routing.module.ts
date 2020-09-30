import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColoriComponent } from './colori/colori.component';
import { TitoloComponent } from './titolo/titolo.component';
import { OpzioneComponent } from './opzione/opzione.component';
import { EsempioComponent } from './esempio/esempio.component';

const routes: Routes = [
    {
      path: 'dettaglio-soluzione',
      component: TitoloComponent,
      children: [
        { path: 'dettaglio-soluzione',
          component: ColoriComponent,
          pathMatch: 'full'
        },
        { path: 'dettaglio-soluzione',
          component: OpzioneComponent,
          pathMatch: 'full'
        },
        { path: 'dettaglio-soluzione',
          component: EsempioComponent,
          pathMatch: 'full'
        }
      ],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DettaglioSoluzioneRoutingModule { }