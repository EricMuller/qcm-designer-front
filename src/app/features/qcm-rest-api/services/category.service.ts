import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {QCM_API_ENDPOINT_TOKEN, QcmApiEndPoint} from '@app/features/qcm-rest-api/qcm-api-end-point';
import {Category} from '../model/category.model';


@Injectable()
export class CategoryService {

  constructor(private http: HttpClient, @Inject(QCM_API_ENDPOINT_TOKEN) private endPoint: QcmApiEndPoint) {
  }

  public getCategories() {
    return this.http.get<Category[]>(this.endPoint.CATEGORY);
  }

  public postCategory(q: Category) {
    return this.http.post<Category>(this.endPoint.CATEGORY, q);
  }

}
