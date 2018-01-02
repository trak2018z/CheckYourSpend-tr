import { CategoryService } from './../../core/service/category.service';
import { Category } from './model/category';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories-manager',
  templateUrl: './categories-manager.component.html',
  styleUrls: ['./categories-manager.component.scss']
})
export class CategoriesManagerComponent implements OnInit {
  categories: Category[] = [];

  step = 0;
  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.categoryService.getAll().subscribe(result => {
      this.categories = result;
    });
  }

  addNewCategory() {
    const category = new Category();
    category.name = 'New Category';
    this.categories.push(category);
  }

  save(category: Category) {
    this.categoryService.save(category).subscribe(result => {
      category = result;
      this.toastr.success('The Category has been saved', 'Category');
    });
  }

  cancel(category: Category) {
    if (category.id == null) {
      const index = this.categories.indexOf(category);
      this.categories.splice(index, 1);
    }
    this.step = 0;
  }
  setStep(index: number) {
    this.step = index;
  }
}
