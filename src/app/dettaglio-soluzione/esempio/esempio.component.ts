import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esempio',
  templateUrl: './esempio.component.html',
  styleUrls: ['./esempio.component.scss']
})
export class EsempioComponent implements OnInit {

  constructor(private dataService: AuthService, private routes: Router) {

  }

  dettaglioSoluzione: object[];
  soluzione: string;
  testo: string;
  immagini: object[];

  ngOnInit(): void {
    // this.dataService.getSoluzioniDettaglio(sessionStorage.getItem('soluzione'))
    // .subscribe((response: object[]) => this.dettaglioSoluzione = response);
    this.dataService.getSoluzioniDettaglio(sessionStorage.getItem('soluzione'))
    .subscribe((response: any) => {
      if (response['message'] === null) {
        this.dettaglioSoluzione = response;
      } else {
        alert('Session Expired');
        this.routes.navigate(['login']);
      }
    });
    this.soluzione = sessionStorage.getItem('soluzioneT');
    this.dataService.getSoluzioneDocumenti()
    .subscribe((response: object[]) => this.testo = response['effetto']['testo']['descrizione']);
    this.dataService.getSoluzioneDocumenti()
    .subscribe((response: object[]) => this.immagini = response['effetto']['immagini']);
  }
}
