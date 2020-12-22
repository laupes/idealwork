import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';
import { map } from 'rxjs/operators';

import { Utente } from '../../utente.interface';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'assets/utenti.json';
  urlCodici = 'assets/codici.json';
  loginUrl = 'http://10.52.1.120:3000/login';

  currentUser: any;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  private handleError(error: any) {
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(errMessage);
    }
    return throwError(error);
  }

  login(credentials): Observable<object> {
    const header = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded');
    const body = new HttpParams()
    .set('username', credentials['username'])
    .set('password', credentials['password']);
    const option = {
      headers: header
    };
    console.log(body);
    return this.http.post<any>(this.loginUrl, body, option)
      .pipe(
        map(res => {
          console.log(res);
          this.currentUser = res;
          return res;
        })
        );
  }

  logIn(credentials) {
    const data = 'username=' + credentials['username'] + 'password=' + credentials['password'] + '&grant_type=password';
    const reqHeaders = new HttpHeaders({'Content-Type' : 'application/x-www-urlencoded'});
    return this.http.post(this.loginUrl, data, {headers: reqHeaders});
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
