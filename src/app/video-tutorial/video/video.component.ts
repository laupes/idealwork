import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor(private dataService: AuthService) { }

  videos: object[];

  ngOnInit(): void {
    this.dataService.getSoluzioneDocumenti()
    .subscribe((response: object[]) => this.videos = response['tutorial'].sort(function(a, b) {
      return a.sequenza - b.sequenza;
    }));
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }


}
