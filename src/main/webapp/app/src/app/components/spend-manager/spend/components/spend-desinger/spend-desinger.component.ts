import { CategoryService } from './../../../../../core/service/category.service';
import { Category } from './../../../../categories-manager/model/category';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Spend } from './../../model/spend';
import { ExpenditureService } from './../../../../../core/service/expenditure.service';
import {
  Component,
  OnInit,
  Inject,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-spend-desinger',
  templateUrl: './spend-desinger.component.html',
  styleUrls: ['./spend-desinger.component.scss']
})
export class SpendDesingerComponent implements OnInit {
  @Output()
  public spendDesinger: EventEmitter<boolean> = new EventEmitter<boolean>();

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
export class SpendDesingerDialogComponent implements OnInit {
  public spend: Spend = new Spend();

  public categories: Category[] = [];

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<SpendDesingerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private expenditureService: ExpenditureService,
    private toastr: ToastrService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    if (this.data != null) {
      this.spend.id = this.data.id;
      this.spend.category = this.data.category;
      this.spend.date = new Date(this.data.date);
      this.spend.description = this.data.description;
      this.spend.value = this.data.value;
    }
    this.categoryService.getAll().subscribe(result => {
      this.categories = result;
    });
  }

  onCloseDialog(spend?: Spend): void {
    this.dialogRef.close(spend);
  }

  save() {
    this.expenditureService.save(this.spend).subscribe(o => {
      this.toastr.success('The Expenditure has been saved', 'Expenditure');
      this.expenditureService.expenditureServiceObserver.next(true);
      this.onCloseDialog(o);
    });
  }
}
