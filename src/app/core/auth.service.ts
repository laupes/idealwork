import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { Utente } from './../interfaces/utente.interface';
import { TitoloComponent } from './../video-tutorial/titolo/titolo.component';
import { EncrDecrService } from './../encr-decr-service.service';
import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, tap, } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as CryptoJS from 'crypto-js';



// IN.p4v1m3nt020

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private encrDecr: EncrDecrService) {
  }

  get staticLingue(): object[] {
    return AuthService.lingue;
  }

  set staticLingue(lingue: object[]) {
    AuthService.lingue = lingue;
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

  static lingua: string;
  static token: string;
  // baseUrl = 'assets/utenti.json';
  // urlCodici = 'assets/codici.json';
  // loginUrl = '/login';
  static url = 'https://idea.idealwork.it:3000/';
  // static url = 'https://10.52.1.120:3000/';
  // static url = './';
  static secretKey = 'poiuyghj56789yghh';
  static lingue: object[];
  currentUser: Utente;

  public isAuthenticated(): boolean {
    if (sessionStorage.getItem('token')) {
      return false;
    } else {
      return false;
    }
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
      // // console.log(body);
      return this.http.post<any>(this.loginUrl, body, {headers: header , observe: 'response', withCredentials: true} )
        .pipe(
          map(response => {
            // console.log(response);
            if (response['result'] !== 'incorrect') {
            localStorage.setItem('token', response.headers.get('Set-Cookie'));
            // sessionStorage.setItem('utente', response.hash);
            // tslint:disable-next-line: max-line-length
            // sessionStorage.setItem('SESSIONID', 'connect.sid=s%3AbMQ0f6Th4-k0G7aRaXE8I3hS92v4UleY.Hs5OUDidYil1Y3o%2FUZ4DRXeoTAM%2BmDruzTanFAlcDeA; Path=/; Expires=Wed, 23 Dec 2020 12:39:10 GMT');
            // tslint:disable-next-line: max-line-length
            // this.cookies.set('SessionID', 'connect.sid=s%3Ah6IrMz8LleceoWqazuerK8pyxHNLiop9.0GxvAYjPnrX%2BWTGIKnZWd8ioCQYnKCptw%2FjDmzcdqmc');
            const cookie  = response.headers.keys();
            // console.log('cookie: ' + cookie);
            // this.currentUser = response;
            return response;
            } else {
              return null;
            }
          })
          );
    }
  */

  // tslint:disable-next-line: typedef
  private handleError(error: Response) {
    if (error.statusText === 'Unknow error') {
    return Observable.throw(new PageNotFoundComponent());
    } else {
      throwError(new PageNotFoundComponent());
    }
  }

  getSoluzioni(): Observable<any[]> {
    const key = '123456$#@$^@1ERF';
    const token = this.encrDecr.get(key, sessionStorage.getItem('token'));
    const header = new HttpHeaders()
      .set('Access-Token', token);
    return this.http.get<any[]>(AuthService.url + 'soluzioni/' + (this.staticLingua ? this.staticLingua
      : sessionStorage.getItem('lingua')), { headers: header })
      .pipe(
        tap(resData => {
          // console.log(resData);
        })
      );
  }

  getSoluzioniDettaglio(soluzione: string): Observable<any[]> {
    const key = '123456$#@$^@1ERF';
    const token = this.encrDecr.get(key, sessionStorage.getItem('token'));
    const header = new HttpHeaders()
      .set('Access-Token', token);
    return this.http.get<any[]>(AuthService.url + 'soluzioni/' + (this.staticLingua ? this.staticLingua
      : sessionStorage.getItem('lingua')) + '/' + soluzione, { headers: header })
      .pipe(
        tap(resData => {
          // console.log(resData);
        })
      );
  }

  getSoluzioneColore(): Observable<any[]> {
    const key = '123456$#@$^@1ERF';
    const token = this.encrDecr.get(key, sessionStorage.getItem('token'));
    const header = new HttpHeaders()
      .set('Access-Token', token);
    return this.http.get<any[]>(AuthService.url + 'soluzioni/' + sessionStorage.getItem('lingua') + '/' +
      sessionStorage.getItem('soluzione') + '/' + 'colori'
      , { headers: header })
      .pipe(
        tap(resData => {
          // console.log(resData);
        })
      );
  }

  getSoluzioneCartelle(): Observable<any[]> {
    const key = '123456$#@$^@1ERF';
    const token = this.encrDecr.get(key, sessionStorage.getItem('token'));
    const header = new HttpHeaders()
      .set('Access-Token', token);
    return this.http.get<any[]>(AuthService.url + 'soluzioni/' + sessionStorage.getItem('lingua') + '/' +
      sessionStorage.getItem('soluzione') + '/' + 'cartelle'
      , { headers: header })
      .pipe(
        tap(resData => {
          // console.log(resData);
        })
      );
  }

  getSoluzioneDocumenti(): Observable<any[]> {
    const key = '123456$#@$^@1ERF';
    const token = this.encrDecr.get(key, sessionStorage.getItem('token'));
    const header = new HttpHeaders()
      .set('Access-Token', token);
    return this.http.get<any[]>(AuthService.url + 'soluzioni/' + sessionStorage.getItem('lingua') + '/' +
      sessionStorage.getItem('soluzione') + '/' + 'documenti'
      , { headers: header })
      .pipe(
        tap(resData => {
          console.log(resData);
        })
      );
  }

  scaricaPdf(link: string): Observable<any> {
    const header = new HttpHeaders()
      .set('Accept', 'application/pdf');
    return this.http.get(link, { headers: header, observe: 'response', responseType: 'blob' }).pipe(tap(resData => {
      // console.log(resData);
    }));
  }

  getLingue(): Observable<any[]> {
    return this.http.get<any[]>(AuthService.url + 'lingue').pipe(
      tap(resData => {
        // console.log(resData);
      }), catchError(this.handleError)
    );
  }

  getSoluzioneSottoCartelle(): Observable<any[]> {
    const key = '123456$#@$^@1ERF';
    const token = this.encrDecr.get(key, sessionStorage.getItem('token'));
    const header = new HttpHeaders()
      .set('Access-Token', token);
    return this.http.get<any[]>(AuthService.url + 'soluzioni/' + sessionStorage.getItem('lingua') + '/' +
      sessionStorage.getItem('soluzione') + '/' + 'cartelle'
      + '/' + sessionStorage.getItem('cartella'), { headers: header })
      .pipe(
        tap(resData => {
         // console.log(resData);
        })
      );
  }

  richiestaAccesso(credentials: { [x: string]: string; }): Observable<any> {
    const header = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    const urlR = AuthService.url + 'request';
    const body = new HttpParams()
      .set('nome', credentials['nome'].trim())
      .set('cognome', credentials['cognome'].trim())
      .set('email', credentials['email'].trim())
      .set('codice', credentials['codice-azienda'])
      .set('note', credentials['note'] ? credentials['note'] : '');
    return this.http.post(urlR, body, { headers: header, observe: 'response', withCredentials: true })
      .pipe(map(response => {
        // console.log(response);
        /* if (response['body']['result'].toString().includes('existing')) {
          return 'esistente';
        } else if (response['body']['result'].toString().includes('not_found')) {
          return 'non trovato';
        } else {
          return 'corretto';
        } */
        return response['body'];
      })
      );
  }

  reimpostaPassword(email: string, hash: string, credentials: { [x: string]: string; }): Observable<string> {
    const header = new HttpHeaders()
      .set('Content-type', 'application/x-www-form-urlencoded');
    const urlP = AuthService.url + 'reset';
    const body = new HttpParams()
      .set('email', email)
      .set('hash', hash)
      .set('password', credentials['password']);
    return this.http.post(urlP, body, { headers: header, observe: 'response', withCredentials: true })
      .pipe(map(response => {
        // console.log(response.body['result']);
        return response.body['result'];
      })
      );
  }

  logIn(credentials: { [x: string]: string; }): Observable<any> {
    localStorage.clear();
    const http = new XMLHttpRequest();
    const promise = new Promise(function (resolve, reject) {
      http.onload = function (): void {
        resolve(this.responseText);
      };
      http.onerror = function (): void {
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
          const res = JSON.parse(http.response);
          if (http.responseText.length > 30) {
            const token = res.token;
            // console.log(res.download.titolo);
            localStorage.setItem('titoloApp', res.download.titolo);
            localStorage.setItem('descrizioneApp', res.download.descrizione);
            AuthService.lingua = res.utente.lingua;
            AuthService.token = token;
            sessionStorage.setItem('lingua', res.utente.lingua);
            AuthService.lingue = res.lingue;
            AuthService.lingue.forEach((x) => {
              // localStorage.removeItem('linguaArray');
              // console.log(x['lingua']);
            });
            // console.log(AuthService.lingue);
            // console.log(res.lingue);
            // console.log(AuthService.lingue);
          }
        }
      };
      body.forEach(x => {
        // console.log(x);
      });
      http.send(body);
    });
    return from(promise);
  }

  logInApp(username: string, password: string): Observable<any> {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    const http = new XMLHttpRequest();
    const promise = new Promise(function (resolve, reject) {
      http.onload = function (): void {
        resolve(this.responseText);
      };
      http.onerror = function (): void {
        reject(this.status);
      };
      // const params = 'username=' + credentials['username'] + '&passowrd=' + credentials['password'];
      // const params = JSON.stringify({ username : credentials['username'], password : credentials['password'] });
      const body = new URLSearchParams();
      body.set('username', username);
      body.set('password', password);
      const urlL = AuthService.url + 'login';
      http.open('POST', urlL, true);
      http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      http.onreadystatechange = () => {
        const res = JSON.parse(http.response);
        if (http.readyState === 4 && http.status === 200) {
          if (http.responseText.length > 30) {
            const token = res.token;
            localStorage.setItem('titoloApp', res.download.titolo);
            localStorage.setItem('descrizioneApp', res.download.descrizione);
            AuthService.lingua = res.utente.lingua;
            AuthService.token = token;
            sessionStorage.setItem('lingua', res.utente.lingua);
            /* AuthService.lingue.forEach((x) => {
              if (x['lingua'] !== res.utente.lingua) {
                if (!localStorage.getItem('linguaArray')) {
                  localStorage.setItem('linguaArray', x['lingua']);
                } else {
                  localStorage.setItem('linguaArray', localStorage.getItem('linguaArray') + ' ' + x['lingua']);
                }
              }
            }); */
          }
        }
      };
      body.forEach(x => {
        // console.log(x);
      });
      http.send(body);
    });
    return from(promise);
  }

  /*
  getUtenti(): Observable<Utente[]> {
    return this.http.get<Utente[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          // console.log(resData);
        })
      );
  }

  getCodici(): Observable<string[]> {
    return this.http.get<string[]>(this.urlCodici)
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          // console.log(resData);
        })
      );
  }
  */
}
