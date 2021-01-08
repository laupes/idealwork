import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitoloComponent } from './titolo/titolo.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
    {
        path: 'video-tutorial',
        component: TitoloComponent,
        children: [
          { path: 'video-tutorial',
            component: VideoComponent,
            pathMatch: 'full'
          }
        ],
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoTutorialRoutingModule { }