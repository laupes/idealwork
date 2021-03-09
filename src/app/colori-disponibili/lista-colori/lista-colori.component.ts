import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { Component, OnInit } from '@angular/core';
import { Colore } from 'src/app/interfaces/colore.interface';

@Component({
  selector: 'app-lista-colori',
  templateUrl: './lista-colori.component.html',
  styleUrls: ['./lista-colori.component.scss']
})
export class ListaColoriComponent implements OnInit {

  constructor(private dataService: AuthService, private routes: Router) { }

  colori: Colore[];

  ngOnInit(): void {
      // this.dataService.getSoluzioneColore().subscribe((response: any) => this.colori = response);
      this.dataService.getSoluzioneColore().subscribe((response: any) => {
        if (response['message'] !== 'not_autorized') {
          this.colori = response;
        } else {
          alert('Session Expired');
          this.routes.navigate(['login']);
        }
      });
  }
  selezioneMateriale(codiceMateriale: string, descrizione: string, img: string, testo: string, pdf: string[]): void {
    sessionStorage.setItem('codiceMateriale', codiceMateriale);
    sessionStorage.setItem('descrizioneMateriale', descrizione);
    sessionStorage.setItem('imgMateriale', img);
    sessionStorage.setItem('testoMateriale', testo);
    this.storePdf(pdf);
    // console.log(descrizione);
    this.routes.navigate(['prodotto']);
  }

  storePdf(pdf: string[]): void {
    sessionStorage.removeItem('pdfArray');
    if (pdf) {
      pdf.forEach((f) => {
        sessionStorage.setItem('pdfArray', sessionStorage.getItem('pdfArray') + ' ' + f);
      });
    }
  }

}
