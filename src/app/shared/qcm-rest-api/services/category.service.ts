import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {QcmApi} from '@app/shared/qcm-rest-api/qcm-api';
import {Category} from '../model/category.model';


@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  public getCategories() {
    return this.http.get<Category[]>(QcmApi.CATEGORY);
  }

  public postCategory(q: Category) {
    return this.http.post<Category>(QcmApi.CATEGORY, q);
  }

}
