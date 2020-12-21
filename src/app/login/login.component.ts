import { HttpClient } from '@angular/common/http';
import { EventEmitter, Input, Output, Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';


import { Utente } from 'src/utente.interface';
import { LoginService } from '../core/login.service';
import { DataService } from '../data.service';
import { EventEmitterService } from './../event-emitter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nomeUtente: string;
  utenti: Utente[];
  codici: string[];
  loginFatto = false;
  check: boolean = this.loginFatto;

  @Input() nome: string;
  @Input() password: string;
  @Output() checkEvent: EventEmitter<boolean> = new EventEmitter();

  // tslint:disable-next-line: max-line-length
  constructor(private dataService: LoginService, private http: HttpClient, private router: Router, private emitter: EventEmitterService, private data: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getUtenti().subscribe((utenti: Utente[]) => this.utenti = utenti);
    this.dataService.getCodici().subscribe((codici: string[]) => this.codici = codici);

    this.data.currentCheck.subscribe(check => this.check = check);

    $('.navigation').hide();
    $('.richiedi-accesso-down').hide();

    $('.richiedi-accesso').click(function() {
      $('.richiedi-accesso-down').toggle();
    });
  }

  sendCheck(): void {
   this.checkEvent.emit(this.loginFatto);
  }

  changeCheck(): void {
    this.data.changeCheck(true);
  }

  signIn(credentials): any {
    this.dataService.login(credentials)
      .subscribe(result => {
        if (result) {
          this.router.navigate(['soluzioni']);
        }
        else {

        }
      });
  }

  login(username: string, password: string): void {
    for (let x = 0; x < this.utenti.length; x++) {
      if (this.utenti[x].username === username) {
        if (this.utenti[x].password === password) {
          this.nomeUtente = this.utenti[x].nome;
          this.sendCheck();
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
