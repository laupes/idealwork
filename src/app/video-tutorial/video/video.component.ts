import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor(private dataService: AuthService, private routes: Router) { }

  videos: object[];

  ngOnInit(): void {
    this.dataService.getSoluzioneDocumenti()
    .subscribe((response: any) => {
      if (response['message'] === undefined) {
        this.videos = response['tutorial'].sort(function(a, b) {
          return a.sequenza - b.sequenza;
        });
      } else {
        alert('Session Expired');
        this.routes.navigate(['login']);
      }
    } );
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }


}
