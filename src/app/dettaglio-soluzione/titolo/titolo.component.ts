import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titolo',
  templateUrl: './titolo.component.html',
  styleUrls: ['./titolo.component.scss']
})
export class TitoloComponent implements OnInit {

  constructor(private dataService: AuthService, private routes: Router) { }

  dettaglioSoluzione: object[];
  titolo: string;
  descrizione: string;


  ngOnInit(): void {
    var browser = (function (agent) {
      switch (true) {
          case agent.indexOf("edge") > -1: return "edge";
          case agent.indexOf("edg/") > -1: return "chromium";
          case agent.indexOf("opr") > -1  : return "opera";
          case agent.indexOf("chrome") > -1  : return "chrome";
          case agent.indexOf("trident") > -1: return "ie";
          case agent.indexOf("firefox") > -1: return "firefox";
          case agent.indexOf("safari") > -1: return "safari";
          default: return "other";
      }
  })(window.navigator.userAgent.toLowerCase());
  sessionStorage.setItem('browser', browser);
    this.dataService.getSoluzioniDettaglio(sessionStorage.getItem('soluzione'))
    .subscribe((response: object[]) => {
      if (response['message'] === undefined) {
        this.dettaglioSoluzione = response;
      } else {
        // alert('Session Expired');
        // this.routes.navigate(['login']);
      }
    } );
    this.dataService.getSoluzioniDettaglio(sessionStorage.getItem('soluzione'))
    .subscribe((response: object[]) => {
      if (response['message'] === undefined) {
        this.titolo = response['testo'];
      } else {
        // alert('Session Expired');
        // this.routes.navigate(['login']);
      }
    });
    this.dataService.getSoluzioniDettaglio(sessionStorage.getItem('soluzione'))
    .subscribe((response: object[]) => {
      if (response['message'] === undefined) {
        this.descrizione = response['descrizione'];
      } else {
        // alert('Session Expired');
        // this.routes.navigate(['login']);
      }
    } );
  }



}
