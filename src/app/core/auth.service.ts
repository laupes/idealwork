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

  // baseUrl = 'assets/utenti.json';
  // urlCodici = 'assets/codici.json';
  loginUrl = 'http://10.52.1.120:3000/login';

  currentUser: Utente;
  lingua: string;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  private handleError(error: any) {
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(errMessage);
    }
    return throwError(error);
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
    return this.http.get<any[]>('http://10.52.1.120:3000/soluzioni/' + this.lingua)
    .pipe(
      tap(resData => {
        console.log(resData);
      })
    );
  }

  getSoluzioniDettaglio(soluzione: string): Observable<any[]> {
    return this.http.get<any[]>('http://10.52.1.120:3000/soluzioni/' + this.lingua + soluzione)
    .pipe(
      tap(resData => {
        console.log(resData);
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
      const url = 'http://10.52.1.120:3000/login';
      http.open('POST', url, true);
      http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      http.onreadystatechange = () => {
        if (http.readyState === 4 && http.status === 200) {
          console.log(http.responseText);
          this.lingua = http.responseText.split(',')[6].split(':')[1].replace('\"', '').replace('\"', '');
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
    const url = 'http://10.52.1.120:3000/login';
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
