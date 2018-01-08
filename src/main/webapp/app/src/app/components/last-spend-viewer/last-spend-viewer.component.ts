import { ExpenditureService } from './../../core/service/expenditure.service';
import { Spend } from './../spend-manager/spend/model/spend';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { SpendDesingerDialogComponent } from '../spend-manager/spend/components/spend-desinger/spend-desinger.component';

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

  constructor(
    public dialog: MatDialog,
    private expenditureService: ExpenditureService
  ) {}

  ngOnInit() {
    this.loadData(0, this.pageSize);
    this.expenditureService.expenditureServiceObservable.subscribe(result => {
      this.loadData(0, this.pageSize);
    });
  }

  edit(spend: Spend) {
    const dialogRef = this.dialog.open(SpendDesingerDialogComponent, {
      width: '450px',
      data: spend
    });

    dialogRef.afterClosed().subscribe(result => {});
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
