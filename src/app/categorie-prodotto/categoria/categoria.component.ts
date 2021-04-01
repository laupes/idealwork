import { AuthService } from 'src/app/core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  materiali: any;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getSoluzioniDettaglio(sessionStorage.getItem('soluzione')).subscribe((res) => {
      // console.log(res['attrezzature']);
      this.materiali = res['attrezzature'];
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
