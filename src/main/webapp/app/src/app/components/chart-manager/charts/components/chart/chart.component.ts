import { ExpenditureService } from './../../../../../core/service/expenditure.service';
import { MATERIAL_COLORS } from './../../../../../core/material/material/material-colors';
import { ExpenditureChart } from './../../../model/expenditure-chart.interface';
import { ChartRange } from './../../../model/chart-range.enum';
import { ChartGroupBy } from './../../../model/chart-groupby.enum';
import { ChartType } from './../../../model/chart-type.enum';
import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  ChartType = ChartType;
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
          this.data = result.filter(
            (expenditureChart: ExpenditureChart) => expenditureChart.value > 0.0
          );
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
