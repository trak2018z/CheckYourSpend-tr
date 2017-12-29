import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-spend-desinger',
  templateUrl: './spend-desinger.component.html',
  styleUrls: ['./spend-desinger.component.scss']
})
export class SpendDesingerComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SpendDesingerDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}

@Component({
  selector: 'app-spend-desinger-dialog',
  templateUrl: 'spend-desinger-dialog.component.html',
  styleUrls: ['./spend-desinger.component.scss']
})
export class SpendDesingerDialogComponent {
  public value: number = 0.0;
  constructor(
    public dialogRef: MatDialogRef<SpendDesingerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}

  onCloseDialog(): void {
    console.log(this.value);
    this.dialogRef.close();
  }
}
