import { AuthService } from 'src/app/core/auth.service';
import { Prodotto } from './../../interfaces/prodotto.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipologia',
  templateUrl: './tipologia.component.html',
  styleUrls: ['./tipologia.component.scss']
})
export class TipologiaComponent implements OnInit {

  constructor(private dataService: AuthService) { }

  prodotti: Prodotto[];
  titolo: string;

  ngOnInit(): void {
    this.dataService.getSoluzioneCartelle().subscribe((response: Prodotto[]) => this.prodotti = response);
    this.titolo = sessionStorage.getItem('soluzione');
  }

  selezioneProdotto(prodotto: string): void{
    sessionStorage.setItem('prodotto', prodotto);
  }

  selezioneCartella(cartella: string): void {
    sessionStorage.setItem('cartella', cartella);
  }

  selezione(prodotto: string, cartella: string): void {
    this.selezioneCartella(cartella);
    this.selezioneProdotto(prodotto);
  }

}
