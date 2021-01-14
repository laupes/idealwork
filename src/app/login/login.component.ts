import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Input, Output, Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  clicked = false;
  param: string;

  @Input() nome: string;
  @Input() password: string;
  @Output() checkEvent: EventEmitter<boolean> = new EventEmitter();

  // tslint:disable-next-line: max-line-length
  constructor(private dataService: AuthService, private http: HttpClient, private route: ActivatedRoute,
              private router: Router, private emitter: EventEmitterService, private data: DataService) {
                this.route.queryParams.subscribe(params => {
                  console.log(params);
              });
  }

  ngOnInit(): void {
    // this.dataService.getUtenti().subscribe((utenti: Utente[]) => this.utenti = utenti);
    // this.dataService.getCodici().subscribe((codici: string[]) => this.codici = codici);

    this.data.currentCheck.subscribe(check => this.check = check);

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');


    togglePassword.addEventListener('click', function (e) {
      // toggle the type attribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      // toggle the eye slash icon
      this.classList.toggle('fa-eye-slash');
    });


    $('.navigation').hide();
    $('.richiedi-accesso-down').hide();

    $('.alert-danger').hide();

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

  /* get isLoggedIn(): Observable<boolean> {
    const authToken = this.cookieService.get('vmkr');
    if (authToken) {
      return this.getUserBySession(authToken).pipe(
        map(() => true),
        catchError(() => of(false))
      );
    } else {
      console.log('No token found!');
      return of(false);
    }
  } */

  signIn(credentials: any): any {
    this.clicked = true;
    // console.log(credentials);
    this.dataService.logIn(credentials)
      .subscribe((result: string) => {
        if (!result.includes('no_data')) {
          // setTimeout(() => {
            this.router.navigate(['soluzioni']);
            // this.dataService.getSoluzioni().subscribe((soluzioni: Soluzione[]) => this.soluzioni = soluzioni);
        // }, 2000);
        }
        else {
          // return alert('username e/o password sbagliati');
          $('.alert-danger').show();
        }
      });
  }

  richiestaAccesso(credentials: any): any {
    this.dataService.richiestaAccesso(credentials)
    .subscribe((result: boolean) => {
      console.log(result);
      if (result) {
       // this.router.navigate(['reimposta-password']);
      } else {
       // this.router.navigate(['reimposta-password']);
      }
    });
  }


}
