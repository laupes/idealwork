import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Utente } from 'src/utente.interface';
import { LoginService } from '../core/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nomeUtente: string;
  utenti: Utente[];
  codici: string[];

  @Input() nome: string;
  @Input() password: string;

  constructor(private dataService: LoginService, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.dataService.getUtenti().subscribe((utenti: Utente[]) => this.utenti = utenti);
    this.dataService.getCodici().subscribe((codici: string[]) => this.codici = codici);

    $('.navigation').hide();
    $('.richiedi-accesso-down').hide();

    $('.richiedi-accesso').click(function() {
      $('.richiedi-accesso-down').toggle();
    });
  }

  login(username: string, password: string): void {
    for (let x = 0; x < this.utenti.length; x++) {
      if (this.utenti[x].username === username) {
        if (this.utenti[x].password === password) {
          this.nomeUtente = this.utenti[x].nome;
          this.router.navigate(['soluzioni']);
          return;
        } else {
          alert('password sbagliata');
          return;
        }
      } else {
        if (x === this.utenti.length - 1) {
          alert('utente non trovato');
        }
      }
    }
  }

}
