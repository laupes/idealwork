import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, throwError, from, observable } from 'rxjs';
import { catchError, tap, } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';
import { map } from 'rxjs/operators';

import { Utente } from '../interfaces/utente.interface';
import { Soluzione } from '../interfaces/soluzione.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  static lingua: string;
  static token: string;

  // baseUrl = 'assets/utenti.json';
  // urlCodici = 'assets/codici.json';
  // loginUrl = '/login';
  // static url = 'https://idea.idealwork.it:3000/';
  static url = 'http://10.52.1.120:3000/';

  currentUser: Utente;

  // tslint:disable-next-line: typedef
  private handleError(error: any) {
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(errMessage);
    }
    return throwError(error);
  }

  get staticLingua(): string {
    return AuthService.lingua;
  }

  set setStaticLingua(lingua: string) {
    AuthService.lingua = lingua;
  }

  get staticToken(): string {
    return AuthService.token;
  }

/*
  login(credentials): Observable<any> {
    const header = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded');
    const body = new HttpParams()
    .set('username', credentials['username'].trim())
    .set('password', credentials['password'].trim());
    const options = {
      headers: header,
    };
    // console.log(body);
    return this.http.post<any>(this.loginUrl, body, {headers: header , observe: 'response', withCredentials: true} )
      .pipe(
        map(response => {
          console.log(response);
          if (response['result'] !== 'incorrect') {
          localStorage.setItem('token', response.headers.get('Set-Cookie'));
          // sessionStorage.setItem('utente', response.hash);
          // tslint:disable-next-line: max-line-length
          // sessionStorage.setItem('SESSIONID', 'connect.sid=s%3AbMQ0f6Th4-k0G7aRaXE8I3hS92v4UleY.Hs5OUDidYil1Y3o%2FUZ4DRXeoTAM%2BmDruzTanFAlcDeA; Path=/; Expires=Wed, 23 Dec 2020 12:39:10 GMT');
          // tslint:disable-next-line: max-line-length
          // this.cookies.set('SessionID', 'connect.sid=s%3Ah6IrMz8LleceoWqazuerK8pyxHNLiop9.0GxvAYjPnrX%2BWTGIKnZWd8ioCQYnKCptw%2FjDmzcdqmc');
          const cookie  = response.headers.keys();
          console.log('cookie: ' + cookie);
          // this.currentUser = response;
          return response;
          } else {
            return null;
          }
        })
        );
  }
*/
  getSoluzioni(): Observable<any[]> {
    const header = new HttpHeaders()
    .set('Access-Token', sessionStorage.getItem('token'));
    return this.http.get<any[]>(AuthService.url + 'soluzioni/' + (this.staticLingua ? this.staticLingua
    : sessionStorage.getItem('lingua')), { headers: header })
    .pipe(
      tap(resData => {
        console.log(resData);
      })
    );
  }

  getSoluzioniDettaglio(soluzione: string): Observable<any[]> {
    const header = new HttpHeaders()
    .set('Access-Token', sessionStorage.getItem('token'));
    return this.http.get<any[]>(AuthService.url + 'soluzioni/' + (this.staticLingua ? this.staticLingua
    : sessionStorage.getItem('lingua')) + '/' + soluzione, { headers: header })
    .pipe(
      tap(resData => {
        console.log(resData);
      })
    );
  }

  getSoluzioneColore(): Observable<any[]> {
    const header = new HttpHeaders()
    .set('Access-Token', sessionStorage.getItem('token'));
    return this.http.get<any[]>(AuthService.url + 'soluzioni/' + sessionStorage.getItem('lingua') + '/' +
    sessionStorage.getItem('soluzione') + '/' + 'colori'
    , { headers: header })
    .pipe(
      tap(resData => {
        console.log(resData);
      })
    );
  }

  getSoluzioneCartelle(): Observable<any[]> {
    const header = new HttpHeaders()
    .set('Access-Token', sessionStorage.getItem('token'));
    return this.http.get<any[]>(AuthService.url + 'soluzioni/' + sessionStorage.getItem('lingua') + '/' +
    sessionStorage.getItem('soluzione') + '/' + 'cartelle'
    , { headers: header })
    .pipe(
      tap(resData => {
        console.log(resData);
      })
    );
  }

  getSoluzioneSottoCartelle(): Observable<any[]> {
    const header = new HttpHeaders()
    .set('Access-Token', sessionStorage.getItem('token'));
    return this.http.get<any[]>(AuthService.url + 'soluzioni/' + sessionStorage.getItem('lingua') + '/' +
     sessionStorage.getItem('soluzione') + '/' + 'cartelle'
    + '/' + sessionStorage.getItem('cartella'), { headers: header })
    .pipe(
      tap(resData => {
        console.log(resData);
      })
    );
  }

  richiestaAccesso(credentials: {[x: string]: string; }): Observable<any> {
    const header = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded');
    const urlR = AuthService.url + 'request';
    const body = new HttpParams()
    .set('nome', credentials['nome'].trim())
    .set('cognome', credentials['cognome'].trim())
    .set('email', credentials['email'].trim())
    .set('codice', credentials['codice-azienda'])
    .set('note', credentials['note']);
    const options = {
      headers: header,
    };
    return this.http.post(urlR, body, {headers: header , withCredentials: true})
    .pipe(map(response => {
      console.log(response['result']);
    })
    );
  }

  logIn(credentials: { [x: string]: string; }): Observable<any> {
    const http = new XMLHttpRequest();
    const promise = new Promise(function(resolve, reject) {
      http.onload = function(): void {
        resolve(this.responseText);
      };
      http.onerror = function(): void {
        reject(this.status);
      };
      // const params = 'username=' + credentials['username'] + '&passowrd=' + credentials['password'];
      // const params = JSON.stringify({ username : credentials['username'], password : credentials['password'] });
      const body = new URLSearchParams();
      body.set('username', credentials['username']);
      body.set('password', credentials['password']);
      const urlL = AuthService.url + 'login';
      http.open('POST', urlL, true);
      http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      http.onreadystatechange = () => {
        if (http.readyState === 4 && http.status === 200) {
          console.log(http.responseText);
          AuthService.lingua = http.responseText.split(',')[7].split(':')[1].replace('\"', '').replace('\"', '');
          AuthService.token = http.responseText.split(',')[12].split(':')[1].replace('\"', '').replace('\"', '').replace('}', '');
          sessionStorage.setItem('lingua', http.responseText.split(',')[7].split(':')[1].replace('\"', '').replace('\"', ''));
          sessionStorage
          .setItem('token', http.responseText.split(',')[12].split(':')[1].replace('\"', '').replace('\"', '').replace('}', ''));
          // console.log(http.responseText.split(',')[7].split(':')[1].replace('\"', '').replace('\"', ''));
          // console.log(http.responseText.split(',')[12].split(':')[1].replace('\"', '').replace('\"', '').replace('}', ''));
          // console.log(http.getResponseHeader('Set-Cookie'));
        }
      };
      body.forEach( x => {
        console.log(x);
      });
      http.send(body);
    });
    return from(promise);
    /*const params = 'username=' + credentials['username'] + '&passowrd=' + credentials['password'];
    const url = '/login';
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        console.log(http.responseText);
      }
    };
    return http.send(params); */
  }

  /*
  getUtenti(): Observable<Utente[]> {
    return this.http.get<Utente[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          console.log(resData);
        })
      );
  }

  getCodici(): Observable<string[]> {
    return this.http.get<string[]>(this.urlCodici)
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          console.log(resData);
        })
      );
  }
  */
}
