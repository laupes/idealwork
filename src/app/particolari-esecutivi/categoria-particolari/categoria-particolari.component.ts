import { Router } from '@angular/router';
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

  constructor(private dataService: AuthService, private routes: Router) { }

  ngOnInit(): void {
    this.soluzione = sessionStorage.getItem('soluzione');
    this.dataService.getSoluzioneDocumenti().subscribe((response: object[]) => {
      if (response['message'] === undefined) {
        this.cartelle = response['particolari'];
      } else {
        alert('Session Expired');
        this.routes.navigate(['login']);
      }
    } );
  }

  salvaTitolo(testo: string): void {
    sessionStorage.setItem('titoloEsecutvo', testo);
  }

}
