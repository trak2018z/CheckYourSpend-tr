import { ChartType } from './../../../model/chart-type.enum';
import { ExpenditureChart } from './../../../model/expenditure-chart.interface';
import { ChartGroupBy } from './../../../model/chart-groupby.enum';
import { ChartRange } from './../../../model/chart-range.enum';
import { ExpenditureService } from './../../../../../core/service/expenditure.service';
import { DatePipe } from '@angular/common';
import { Spend } from './../../../../spend-manager/spend/model/spend';
import { MatTableDataSource } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';
import { MATERIAL_COLORS } from '../../../../../core/material/material/material-colors';
import { Chart } from '../../../model/chart.interface';

@Component({
  selector: 'app-charts-bar-vertical',
  templateUrl: './charts-bar-vertical.component.html',
  styleUrls: ['./charts-bar-vertical.component.scss']
})
export class ChartsBarVerticalComponent implements OnInit, Chart {
  @Input() public chartType: ChartType = ChartType.CHARTS_BAR_VERTICAL;

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
