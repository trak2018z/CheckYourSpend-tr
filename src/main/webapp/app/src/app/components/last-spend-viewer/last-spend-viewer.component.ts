import { ExpenditureService } from './../../core/service/expenditure.service';
import { Spend } from './../spend-manager/spend/model/spend';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-last-spend-viewer',
  templateUrl: './last-spend-viewer.component.html',
  styleUrls: ['./last-spend-viewer.component.scss']
})
export class LastSpendViewerComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = [
    'position',
    'description',
    'value',
    'date',
    'category',
    'action'
  ];

  dataSource: MatTableDataSource<Spend>;

  resultsLength: number = 0;

  pageSize = 10;

  constructor(private expenditureService: ExpenditureService) {}

  ngOnInit() {
    this.loadData(0, this.pageSize);
  }

  onPaginateChange(event) {
    this.loadData(event.pageIndex, event.pageSize);
  }

  private loadData(page: number, pageSize: number) {
    this.expenditureService.get(page, pageSize).subscribe(result => {
      this.resultsLength = result.totalElements;
      this.dataSource = new MatTableDataSource<Spend>(result.content);
    });
  }
}
