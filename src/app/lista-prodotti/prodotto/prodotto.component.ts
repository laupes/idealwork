import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Materiale } from 'src/app/interfaces/materiale.interface';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.scss']
})
export class ProdottoComponent implements OnInit {

  constructor(private dataService: AuthService, private routes: Router) { }
  materiali: Materiale[];

  ngOnInit(): void {
    this.dataService.getSoluzioneSottoCartelle().subscribe((response: Materiale[]) => {
      if (response['message'] === undefined) {
        this.materiali = response;
      } else {
        alert('Session Expired');
        this.routes.navigate(['login']);
      }
    });
  }

  selezioneMateriale(codiceMateriale: string, descrizione: string, img: string, testo: string, pdf: object[]): void {
    sessionStorage.setItem('codiceMateriale', codiceMateriale);
    sessionStorage.setItem('descrizioneMateriale', descrizione);
    sessionStorage.setItem('imgMateriale', img);
    sessionStorage.setItem('testoMateriale', testo);
    this.storePdf(pdf.sort(function(a, b) {
      return a['sequenza'] - b['sequenza'];
    }));
  }

  storePdf(pdf: object[]): void {
    sessionStorage.removeItem('pdfArray');
    if (pdf) {
      pdf.forEach((f) => {
        sessionStorage.setItem('pdfArray', sessionStorage.getItem('pdfArray') + ' ' + f['pdf_link']);
      });
    }
  }

}
