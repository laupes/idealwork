import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';
import { map } from 'rxjs/operators';

import { Utente } from '../interfaces/utente.interface';
import { Soluzione } from '../interfaces/soluzione.interface';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'assets/utenti.json';
  urlCodici = 'assets/codici.json';
  loginUrl = 'http://10.52.1.120:3000/login';

  currentUser: Utente;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  private handleError(error: any) {
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(errMessage);
    }
    return throwError(error);
  }

  login(credentials): Observable<Utente> {
    const header = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded');
    const body = new HttpParams()
    .set('username', credentials['username'].trim())
    .set('password', credentials['password'].trim());
    const option = {
      headers: header
    };
    // console.log(body);
    return this.http.post<Utente>(this.loginUrl, body, option)
      .pipe(
        map(response => {
          console.log(response);
          if (response['result'] !== 'incorrect') {
          localStorage.setItem('token', response.hash);
          this.currentUser = response;
          return response;
          } else {
            return null;
          }
        })
        );
  }

  getSoluzioni(): Observable<Soluzione[]> {
    return this.http.get<Soluzione[]>('http://10.52.1.120:3000/soluzioni/IT')
    .pipe(
      catchError(this.handleError),
      tap(resData => {
        console.log(resData);
      })
    )
  }

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
}
