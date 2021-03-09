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
  // credenziali: { [x: string]: string; };


  @Input() nome: string;
  @Input() password: string;
  @Output() checkEvent: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    // this.dataService.getUtenti().subscribe((utenti: Utente[]) => this.utenti = utenti);
    // this.dataService.getCodici().subscribe((codici: string[]) => this.codici = codici);
    // console.log(typeof(this.disabled));
    // console.log(typeof(this.credenziali));
    this.route.queryParams.subscribe(params => {
      if (params['username']) {
        // console.log(params['username'] + ' ' + params['password']);
        // this.credentials['username'] = params['username'];
        // this.credentials['password'] = params['password'];
        this.signInApp(params['username'].replace('"', '').replace('"', ''), params['password'].replace('"', '').replace('"', ''));
      } else {
        // console.log('no_data');
      }
    });

    this.disabled = true;
    this.data.currentCheck.subscribe(check => this.check = check);
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');
    LoginComponent.linguaBrowser = navigator.language;
    // console.log(LoginComponent.linguaBrowser);


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

  newLinguaSelezionata(l: string): void {
    this.data.changeLingua(l);
  }

  signIn(credentials: any): any {
    this.clicked = true;
    // // console.log(credentials);
    this.dataService.logIn(credentials)
      .subscribe((result: string) => {
        if (!result.includes('incorrect')) {
          // setTimeout(() => {
          const res = JSON.parse(result);
          // console.log(res.utente.lingua);
          // console.log(res.token);
          const key = '123456$#@$^@1ERF';
          const token = res.token;
          // // console.log('questo è token ' + token);
          // // console.log('questo è tokenE ' + this.encrDecr.set(key, token));
          sessionStorage.setItem('token', this.encrDecr.set(key, token));
          setTimeout(() => {
            sessionStorage.removeItem('token');
            alert('Sessione scaudta. Prego rifare il login');
            this.router.navigate(['']);
          }, 3600000);
          this.newLinguaSelezionata(res.utente.lingua);
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
    this.changeCheck();
    // this.refreshGridInAnotherComponent();
  }

  signInApp(username: string, password: string): any {
    this.clicked = true;
    // // console.log(credentials);
    this.dataService.logInApp(username, password)
      .subscribe((result: string) => {
        if (result) {
          if (!result.includes('incorrect')) {
            const res = JSON.parse(result);
            // setTimeout(() => {
            const key = '123456$#@$^@1ERF';
            const token = res.token;
            // // console.log('questo è token ' + token);
            // // console.log('questo è tokenE ' + this.encrDecr.set(key, token));
            sessionStorage.setItem('token', this.encrDecr.set(key, token));
            setTimeout(() => {
              sessionStorage.removeItem('token');
              alert('Sessione scaudta. Prego rifare il login');
              this.router.navigate(['']);
            }, 3600000);
            this.newLinguaSelezionata(res.utente.lingua);
            this.router.navigate(['soluzioni']);
            // this.dataService.getSoluzioni().subscribe((soluzioni: Soluzione[]) => this.soluzioni = soluzioni);
            // }, 2000);
          }
          else {
            // return alert('username e/o password sbagliati');
            this.clicked = false;
            $('.alert-danger').show();
          }
        } else {
          return alert('A network error occurred');
        }
      });
    this.changeCheck();
    // this.refreshGridInAnotherComponent();
  }

  richiestaAccesso(credentials: any): any {
    this.dataService.richiestaAccesso(credentials)
      .subscribe((result: any) => {
        // console.log(result);
        /* if (result.includes('esistente')) {
          // this.router.navigate(['reimposta-password']);
          return alert('utente esistente');
        } else if (result.includes('non trovato')) {
          alert('codice non trovato, verrai reindirizzato verso la pagina contatti di IdealWork');
          this.goToLink('https://www.idealwork.it/contatti/');
          // this.router.navigate(['reimposta-password']);
        } else {
          return alert('Invio richiesta riuscito. Controlla il tuo indirizzo mail');
        } */
        if (result['result'].includes('not_found')) {
          alert(result['message']);
          this.goToLink(result['redirect']);
        } else if (result['result'].includes('success')) {
          alert(result['result']);
          this.disabled = !this.disabled;
        } else {
          alert(result['result']);
          this.disabled = !this.disabled;
        }
      });
  }

  goToLink(url: string): void {
    window.open(url, '_blank');
  }

}
