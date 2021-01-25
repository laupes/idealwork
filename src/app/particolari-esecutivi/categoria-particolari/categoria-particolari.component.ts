import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-particolari',
  templateUrl: './categoria-particolari.component.html',
  styleUrls: ['./categoria-particolari.component.scss']
})
export class CategoriaParticolariComponent implements OnInit {

  soluzione: string;
  cartelle: object[];

  constructor(private dataService: AuthService) { }

  ngOnInit(): void {
    this.soluzione = sessionStorage.getItem('soluzione');
    this.dataService.getSoluzioneDocumenti().subscribe((response: object[]) => this.cartelle = response['particolari']);
  }

  salvaTitolo(testo: string): void {
    sessionStorage.setItem('titoloEsecutvo', testo);
  }

}
