import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Materiale } from 'src/app/interfaces/materiale.interface';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.scss']
})
export class ProdottoComponent implements OnInit {

  constructor(private dataService: AuthService) { }
  materiali: Materiale[];

  ngOnInit(): void {
    this.dataService.getSoluzioneSottoCartelle().subscribe((response: Materiale[]) => this.materiali = response);
  }

  selezioneMateriale(codiceMateriale: string, descrizione: string, img: string, testo: string): void {
    sessionStorage.setItem('codiceMateriale', codiceMateriale);
    sessionStorage.setItem('descrizioneMateriale', descrizione);
    sessionStorage.setItem('imgMateriale', img);
    sessionStorage.setItem('testoMateriale', testo);
  }

}
