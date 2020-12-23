import { HttpClient } from '@angular/common/http';
import { EventEmitter, Input, Output, Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


import { Utente } from 'src/app/interfaces/utente.interface';
import { AuthService } from '../core/auth.service';
import { DataService } from '../data.service';
import { Soluzione } from '../interfaces/soluzione.interface';
import { EventEmitterService } from './../event-emitter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nomeUtente: string;
  // utenti: Utente[];
  // codici: string[];
  soluzioni: Soluzione[];
  loginFatto = false;
  check: boolean = this.loginFatto;

  @Input() nome: string;
  @Input() password: string;
  @Output() checkEvent: EventEmitter<boolean> = new EventEmitter();

  // tslint:disable-next-line: max-line-length
  constructor(private dataService: AuthService, private http: HttpClient, private router: Router, private emitter: EventEmitterService, private data: DataService) {
  }

  ngOnInit(): void {
    // this.dataService.getUtenti().subscribe((utenti: Utente[]) => this.utenti = utenti);
    // this.dataService.getCodici().subscribe((codici: string[]) => this.codici = codici);

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

  signIn(credentials: any): any {
    console.log(credentials);
    this.dataService.logIn(credentials)
      .subscribe(result => {
        if (result) {
          // setTimeout(() => {
            this.router.navigate(['soluzioni']);
            // this.dataService.getSoluzioni().subscribe((soluzioni: Soluzione[]) => this.soluzioni = soluzioni);
        // }, 2000);
        }
        else {
          return alert('username e/o password sbagliati');
        }
      });
  }

}
