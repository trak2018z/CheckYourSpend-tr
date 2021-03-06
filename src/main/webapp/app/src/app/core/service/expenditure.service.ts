import { ChartRange } from './../../components/chart-manager/model/chart-range.enum';
import { ChartGroupBy } from './../../components/chart-manager/model/chart-groupby.enum';
import { ExpenditureChart } from './../../components/chart-manager/model/expenditure-chart.interface';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { HttpClient } from '@angular/common/http';
import { Spend } from './../../components/spend-manager/spend/model/spend';
import { Injectable } from '@angular/core';

@Injectable()
export class ExpenditureService {
  public expenditureServiceObservable: Observable<boolean>;
  public expenditureServiceObserver: Observer<boolean>;

  constructor(private http: HttpClient) {
    this.expenditureServiceObservable = new Observable<boolean>(observer => {
      this.expenditureServiceObserver = observer;
    });
  }

  save(spend: Spend): Observable<Spend> {
    return this.http.post<Spend>('./api/expenditure/save', spend);
  }

  getAll(): Observable<Spend[]> {
    return this.http.get<Spend[]>('./api/expenditure/getAll');
  }

  get(page: number, pageSize: number): Observable<Page<Spend>> {
    return this.http.get<Page<Spend>>(
      `./api/expenditure/get?page=${page}&pageSize=${pageSize}`
    );
  }

  getExpenditureForChart(
    groupBy: ChartGroupBy,
    range: ChartRange
  ): Observable<ExpenditureChart[]> {
    return this.http.get<ExpenditureChart[]>(
      `./api/expenditure/get/chart?groupBy=${ChartGroupBy[groupBy]}&range=${
        ChartRange[range]
      }`
    );
  }
}
