import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../model/category.model';
import {API} from './api';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  public getCategories() {
    return this.http.get<Category[]>(API.CATEGORY).share();
  }

  public postCategory(q: Category) {
    return this.http.post<Category>(API.CATEGORY, q);
  }

}
