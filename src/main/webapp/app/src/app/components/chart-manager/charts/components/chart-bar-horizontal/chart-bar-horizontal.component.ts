import { ExpenditureChart } from './../../../model/expenditure-chart.interface';
import { ChartRange } from './../../../model/chart-range.enum';
import { ChartGroupBy } from './../../../model/chart-groupby.enum';
import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Spend } from '../../../../spend-manager/spend/model/spend';
import { ExpenditureService } from '../../../../../core/service/expenditure.service';
import { MATERIAL_COLORS } from '../../../../../core/material/material/material-colors';
import { Chart } from '../../../model/chart.interface';

@Component({
  selector: 'app-chart-bar-horizontal',
  templateUrl: './chart-bar-horizontal.component.html',
  styleUrls: ['./chart-bar-horizontal.component.scss']
})
export class ChartBarHorizontalComponent implements OnInit, Chart {
  private _chartGroup: ChartGroupBy;

  @Input()
  set chartGroup(chartGroup: ChartGroupBy) {
    this._chartGroup = chartGroup;
    this.loadData(this._chartGroup, this._chartRange);
    this.setXAxisLabel(chartGroup);
  }

  private _chartRange: ChartRange;

  @Input()
  set chartRange(chartRange: ChartRange) {
    this._chartRange = chartRange;
    this.loadData(this._chartGroup, this._chartRange);
  }

  private initData: Spend[] = [];

  data: ExpenditureChart[] = [];

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
    domain: MATERIAL_COLORS
  };

  constructor(
    private datePipe: DatePipe,
    private expenditureService: ExpenditureService
  ) {}

  ngOnInit() {}

  public loadData(groupBy: ChartGroupBy, range: ChartRange): void {
    if (groupBy != null && range != null) {
      this.expenditureService
        .getExpenditureForChart(groupBy, range)
        .subscribe(result => {
          this.data = result;
        });
    }
  }

  private setXAxisLabel(groupBy: ChartGroupBy) {
    switch (groupBy) {
      case ChartGroupBy.EXPENDITURE:
        this.xAxisLabel = 'Spend Name';
        break;
      case ChartGroupBy.CATEGORY:
        this.xAxisLabel = 'Category Name';
        break;
    }
  }
}
