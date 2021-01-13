import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Materiale } from '../interfaces/materiale.interface';

@Component({
  selector: 'app-dettaglio-prodotto',
  templateUrl: './dettaglio-prodotto.component.html',
  styleUrls: ['./dettaglio-prodotto.component.scss']
})
export class DettaglioProdottoComponent implements OnInit {

  constructor() { }
  codice_materiale: string;
  descrizione: string;
  img: string;
  testo: string;

  ngOnInit(): void {
    this.codice_materiale = sessionStorage.getItem('codiceMateriale');
    this.descrizione = sessionStorage.getItem('descrizioneMateriale') != null ? sessionStorage.getItem('descrizioneMateriale') : ' ';
    this.img = sessionStorage.getItem('imgMateriale');
    this.testo = sessionStorage.getItem('testo') != null ? sessionStorage.getItem('testo') : ' ';
  }


}
