import { EncrDecrService } from './../encr-decr-service.service';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Input, Output, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  // tslint:disable-next-line: max-line-length
  constructor(private dataService: AuthService, private http: HttpClient, private route: ActivatedRoute,
              private router: Router, private emitter: EventEmitterService, private data: DataService, private encrDecr: EncrDecrService) {
    this.route.queryParams.subscribe(params => {
      // console.log(params);
    });
  }

  static linguaBrowser: string;
  nomeUtente: string;
  // utenti: Utente[];
  // codici: string[];
  soluzioni: Soluzione[];
  loginFatto = false;
  check: boolean = this.loginFatto;
  clicked = false;
  param: string;
  disabled: boolean;

  @Input() nome: string;
  @Input() password: string;
  @Output() checkEvent: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    // this.dataService.getUtenti().subscribe((utenti: Utente[]) => this.utenti = utenti);
    // this.dataService.getCodici().subscribe((codici: string[]) => this.codici = codici);
    this.disabled = true;
    this.data.currentCheck.subscribe(check => this.check = check);
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');
    LoginComponent.linguaBrowser = navigator.language;
    console.log(LoginComponent.linguaBrowser);


    togglePassword.addEventListener('click', function (e) {
      // toggle the type attribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      // toggle the eye slash icon
      this.classList.toggle('fa-eye-slash');
    });


    $('.navigation').hide();
    // $('.richiedi-accesso-down').hide();

    $('.alert-danger').hide();

    /* $('.richiedi-accesso').click(function() {
      $('.richiedi-accesso-down').toggle();
    }); */
  }

  sendCheck(): void {
    this.checkEvent.emit(this.loginFatto);
  }

  changeCheck(): void {
    this.data.changeCheck(true);
  }

  changeHidden(): void {
    this.disabled = !this.disabled;
  }

  /* get isLoggedIn(): Observable<boolean> {
    const authToken = this.cookieService.get('vmkr');
    if (authToken) {
      return this.getUserBySession(authToken).pipe(
        map(() => true),
        catchError(() => of(false))
      );
    } else {
      // console.log('No token found!');
      return of(false);
    }
  } */

  signIn(credentials: any): any {
    this.clicked = true;
    // // console.log(credentials);
    this.dataService.logIn(credentials)
      .subscribe((result: string) => {
        if (!result.includes('incorrect')) {
          // setTimeout(() => {
          const key = '123456$#@$^@1ERF';
          const token = result.split(',')[12].split(':')[1].replace('\"', '').replace('\"', '').replace('}', '');
          // // console.log('questo è token ' + token);
          // // console.log('questo è tokenE ' + this.encrDecr.set(key, token));
          sessionStorage.setItem('token', this.encrDecr.set(key, token));
          setTimeout(() => {
            sessionStorage.removeItem('token');
            alert('Sessione scaudta. Prego rifare il login');
            this.router.navigate(['']);
       }, 600000);
          this.router.navigate(['soluzioni']);
          // this.dataService.getSoluzioni().subscribe((soluzioni: Soluzione[]) => this.soluzioni = soluzioni);
          // }, 2000);
        }
        else {
          // return alert('username e/o password sbagliati');
          this.clicked = false;
          $('.alert-danger').show();
        }
      });
  }

  richiestaAccesso(credentials: any): any {
    this.dataService.richiestaAccesso(credentials)
      .subscribe((result: string) => {
        // console.log(result);
        if (result.includes('esistente')) {
          // this.router.navigate(['reimposta-password']);
          return alert('utente esistente');
        } else if (result.includes('non trovato')) {
          alert('codice non trovato, verrai reindirizzato verso la pagina contatti di IdealWork');
          this.goToLink('https://www.idealwork.it/contatti/');
          // this.router.navigate(['reimposta-password']);
        } else {
          return alert('Invio richiesta riuscito. Controlla il tuo indirizzo mail');
        }
      });
  }

  goToLink(url: string): void {
    window.open(url, '_self');
  }

}
