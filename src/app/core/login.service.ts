import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';
import { map } from 'rxjs/operators';

import { Utente } from '../../utente.interface';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'assets/utenti.json';
  urlCodici = 'assets/codici.json';
  loginUrl = '10.52.1.120:3000/login';

  currentUser: any;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      // tslint:disable-next-line: deprecation
      return Observable.throw(errMessage);
    }
    // tslint:disable-next-line: deprecation
    return Observable.throw(error || 'Error');
  }

  login(credentials): Observable<object> {
    return this.http.post('http://10.52.1.120:3000/login', credentials, {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      }
    })
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          console.log(resData);
        })
      );
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
