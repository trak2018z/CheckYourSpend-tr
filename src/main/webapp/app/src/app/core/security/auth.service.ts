import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs/Observable';

export const TOKEN_NAME: string = 'jwt_token';

@Injectable()
export class AuthService {
  @Output()
  public userLogin: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  private url: string = './api/user';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token.slice(7, token.length));
    this.userLogin.emit(true);
  }

  deleteToken(): void {
    localStorage.removeItem(TOKEN_NAME);
    this.userLogin.emit(false);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      token = this.getToken();
    }
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }

  login(user): Observable<HttpResponse<Boolean>> {
    return this.http.post<Boolean>(`${this.url}/login`, JSON.stringify(user), {
      headers: this.headers,
      observe: 'response'
    });
  }
}
