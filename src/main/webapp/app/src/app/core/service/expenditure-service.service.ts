import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Spend } from './../../components/spend-manager/spend/model/spend';
import { Injectable } from '@angular/core';

@Injectable()
export class ExpenditureServiceService {
  constructor(private http: HttpClient) {}

  save(spend: Spend): Observable<Spend> {
    return this.http.post<Spend>('./api/expenditure/save', spend);
  }

  getAll(): Observable<Spend[]>{
    return this.http.get<Spend[]>('./api/expenditure/getAll');
  }
}
