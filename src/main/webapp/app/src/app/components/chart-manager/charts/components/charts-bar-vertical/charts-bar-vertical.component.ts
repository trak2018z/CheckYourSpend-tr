import { ExpenditureService } from './../../../../../core/service/expenditure.service';
import { DatePipe } from '@angular/common';
import { Spend } from './../../../../spend-manager/spend/model/spend';
import { MatTableDataSource } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-charts-bar-vertical',
  templateUrl: './charts-bar-vertical.component.html',
  styleUrls: ['./charts-bar-vertical.component.scss']
})
export class ChartsBarVerticalComponent implements OnInit {
  private initData: Spend[] = [];

  single: any[];
  multi: any[];
  data: any[] = [];

  view: any[] = ['700', '500'];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Spend Name';
  showYAxisLabel = true;
  yAxisLabel = 'Value';

  colorScheme = {
    domain: [
      '#F44336',
      '#E91E63',
      '#9C27B0',
      '#673AB7',
      '#3F51B5',
      '#2196F3',
      '#03A9F4',
      '#00BCD4'
    ]
  };

  constructor(
    private datePipe: DatePipe,
    private expenditureService: ExpenditureService
  ) {}

  ngOnInit() {
    this.expenditureService.get(0, 10).subscribe(result => {
      this.initData = result.content;
      const data = result.content.map(el => {
        return {
          name:
            el.description +
            ' ' +
            this.datePipe.transform(el.date, 'dd/MM/yyyy'),
          value: el.value
        };
      });
      this.data = data;
    });
  }
}
