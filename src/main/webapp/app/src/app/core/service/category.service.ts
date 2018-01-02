import { Category } from './../../components/categories-manager/model/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  save(category: Category): Observable<Category> {
    return this.http.post<Category>('./api/category/save', category);
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>('./api/category/getAllCategories');
  }
}
