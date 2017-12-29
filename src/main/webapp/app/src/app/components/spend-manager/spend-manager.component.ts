import { Spend } from './spend/model/spend.interface';
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
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openSpendCreator(): void {
    const dialogRef = this.dialog.open(SpendManagerDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {});
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
