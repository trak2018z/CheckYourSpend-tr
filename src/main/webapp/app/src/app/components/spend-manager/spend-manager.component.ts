import { SpendDesingerDialogComponent } from './spend/components/spend-desinger/spend-desinger.component';
import { ExpenditureServiceService } from './../../core/service/expenditure-service.service';
import { Spend } from './spend/model/spend';
import {
  MatTableDataSource,
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-spend-manager',
  templateUrl: './spend-manager.component.html',
  styleUrls: ['./spend-manager.component.scss']
})
export class SpendManagerComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private expenditureServiceService: ExpenditureServiceService
  ) {}
  displayedColumns = [
    'position',
    'description',
    'value',
    'date',
    'category',
    'action'
  ];

  dataSource: MatTableDataSource<Spend>;
  ngOnInit() {
    this.expenditureServiceService.getAll().subscribe(result => {
      this.dataSource = new MatTableDataSource<Spend>(result);
    });
  }

  openSpendCreator(): void {
    const dialogRef = this.dialog.open(SpendManagerDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

  edit(spend: Spend) {
    const dialogRef = this.dialog.open(SpendDesingerDialogComponent, {
      width: '450px',
      data: spend
    });

    dialogRef.afterClosed().subscribe(result => {
      this.expenditureServiceService.getAll().subscribe(o => {
        this.dataSource = new MatTableDataSource<Spend>(o);
      });
    });
  }
}

@Component({
  selector: 'app-spend-manager-dialog',
  templateUrl: './spend-manager-dialog.component.html',
  styleUrls: ['./spend-manager.component.scss']
})
export class SpendManagerDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SpendManagerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  onCloseDialog(): void {
    this.dialogRef.close();
  }
}
