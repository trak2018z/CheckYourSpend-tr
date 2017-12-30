import { DatePipe } from '@angular/common';
import { Spend } from './../../../../spend-manager/spend/model/spend';
import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-bar-vertical',
  templateUrl: './charts-bar-vertical.component.html',
  styleUrls: ['./charts-bar-vertical.component.scss']
})
export class ChartsBarVerticalComponent implements OnInit {
  single: any[];
  multi: any[];
  data: any[];

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

  constructor(private datePipe: DatePipe) {
    const data = ELEMENT_DATA.map(el => {
      return {
        name: el.description + ' ' + this.datePipe.transform(el.date, 'dd/MM/yyyy'),
        value: el.value
      };
    });
    this.data = data;
  }

  ngOnInit() {}
}

const ELEMENT_DATA: Spend[] = [
  { id: 1, description: 'Spend 1', value: 100, date: new Date(), category: 'Lol' },
  { id: 2, description: 'Spend 2', value: 101, date: new Date(), category: 'Lol' },
  { id: 3, description: 'Spend 3', value: 102, date: new Date(), category: 'Lol' },
  { id: 4, description: 'Spend 4', value: 103, date: new Date(), category: 'Lol' },
  { id: 5, description: 'Spend 5', value: 100, date: new Date(), category: 'Lol' },
  { id: 6, description: 'Spend 6', value: 100, date: new Date(), category: 'Lol' },
  { id: 7, description: 'Spend 7', value: 100, date: new Date(), category: 'Lol' },
  { id: 8, description: 'Spend 8', value: 100, date: new Date(), category: 'Lol' }
];
