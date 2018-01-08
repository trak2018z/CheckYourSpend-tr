import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignupService {
  constructor(private http: HttpClient) {}

  public signup(user): Observable<Boolean> {
    return this.http.post<Boolean>('./api/user/sign-up', user);
  }
}
