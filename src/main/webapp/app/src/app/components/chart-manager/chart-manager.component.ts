import { ChartType } from './model/chart-type.enum';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Spend } from '../spend-manager/spend/model/spend';
import { CHART_TYPES } from './data/chart-types.data';
import { CHART_GROUPS } from './data/chart-groupby.data';
import { CHART_RANGES } from './data/chart-range.data';
import { Chart } from './model/chart.interface';
import { ChartGroupBy } from './model/chart-groupby.enum';
import { ChartRange } from './model/chart-range.enum';

@Component({
  selector: 'app-chart-manager',
  templateUrl: './chart-manager.component.html',
  styleUrls: ['./chart-manager.component.scss']
})
export class ChartManagerComponent implements OnInit {
  ChartType = ChartType;

  public chartTypes: any = CHART_TYPES;

  public chartGoups: any = CHART_GROUPS;

  public chartRanges: any = CHART_RANGES;

  selectedChartType: ChartType;

  selectedChartGroup: ChartGroupBy;

  selectedChartRange: ChartRange;

  chartData: Spend[] = [];

  constructor() {}

  ngOnInit() {
    this.selectedChartType = this.chartTypes[0].value;
    this.selectedChartGroup = this.chartGoups[0].value;
    this.selectedChartRange = this.chartRanges[0].value;
  }
}
