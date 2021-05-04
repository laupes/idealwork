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
  isIEorEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);

  ngOnInit(): void {
    console.log(this.isIEorEdge);
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
