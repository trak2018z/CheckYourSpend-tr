import { DialogManagerComponent } from './dialog-manager/dialog-manager.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private datePipe: DatePipe, public dialog: MatDialog) {}

  ngOnInit() {}

  openManager(): void {
    const dialogRef = this.dialog.open(DialogManagerComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}
