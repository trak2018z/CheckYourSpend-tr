import { ChartRange } from './chart-range.enum';
import { ChartGroupBy } from './chart-groupby.enum';

export interface Chart {
  chartGroup: ChartGroupBy;
  chartRange: ChartRange;
  loadData(groupBy: ChartGroupBy, range: ChartRange): void;
}
