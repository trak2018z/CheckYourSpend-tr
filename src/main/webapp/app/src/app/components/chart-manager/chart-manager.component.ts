import { ChartType } from './model/chart-type.enum';
import { Component, OnInit } from '@angular/core';
import { Spend } from '../spend-manager/spend/model/spend';

@Component({
  selector: 'app-chart-manager',
  templateUrl: './chart-manager.component.html',
  styleUrls: ['./chart-manager.component.scss']
})
export class ChartManagerComponent implements OnInit {
  ChartType = ChartType;

  public chartTypes: any = [
    {
      key: 'Bar Vertical',
      value: ChartType.CHARTS_BAR_VERTICAL
    },
    {
      key: 'Bar Horizontal',
      value: ChartType.HORIZONTAL_BAR_CHART
    }
  ];

  selectedChartType: any;

  chartData: Spend[] = [];

  constructor() {}

  ngOnInit() {
    this.selectedChartType = this.chartTypes[0].value;
  }

  public check() {
    console.log(this.selectedChartType);
  }
}
