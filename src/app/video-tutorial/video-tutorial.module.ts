import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitoloComponent } from './titolo/titolo.component';
import { VideoComponent } from './video/video.component';

import { RouterModule } from '@angular/router';
import { VideoTutorialRoutingModule } from './video-tutorial-routing.module';

@NgModule({
  declarations: [
    TitoloComponent, 
    VideoComponent
  ],
  imports: [
    CommonModule,
    VideoTutorialRoutingModule
  ],
  exports: [
    TitoloComponent,
    VideoComponent
  ]
})
export class VideoTutorialModule { }
