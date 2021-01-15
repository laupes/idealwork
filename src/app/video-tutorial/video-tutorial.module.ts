import { Sublink } from './sublink.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TitoloComponent } from './titolo/titolo.component';
import { VideoComponent } from './video/video.component';

import { RouterModule } from '@angular/router';
import { VideoTutorialRoutingModule } from './video-tutorial-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    TitoloComponent,
    VideoComponent,
    Sublink
  ],
  imports: [
    CommonModule,
    VideoTutorialRoutingModule,
    YouTubePlayerModule,
  ],
  exports: [
    TitoloComponent,
    VideoComponent
  ]
})
export class VideoTutorialModule { }
