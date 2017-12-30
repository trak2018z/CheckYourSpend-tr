import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-manager',
  templateUrl: './dialog-manager.component.html',
  styleUrls: ['./dialog-manager.component.scss']
})
export class DialogManagerComponent implements OnInit {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<DialogManagerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  onCloseDialog(): void {
    this.dialogRef.close();
  }

  openSpendsManager() {
    this.dialogRef.close();
    this.router.navigate(['spends-manager']);
  }

  openCategoriesManager() {
    this.dialogRef.close();
    this.router.navigate(['categories-manager']);
  }
}
