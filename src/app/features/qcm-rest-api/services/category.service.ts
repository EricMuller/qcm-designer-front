import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {QCM_API_ENDPOINT_TOKEN, QcmApiEndPoint} from '@app/features/qcm-rest-api/qcm-api-end-point';
import {Category} from '../model/category.model';


@Injectable()
export class CategoryService {

  constructor(private http: HttpClient, @Inject(QCM_API_ENDPOINT_TOKEN) private endPoint: QcmApiEndPoint) {
  }

  public getQuestionsCategories() {
    return this.http.get<Category[]>(this.endPoint.CATEGORY + 'questions');
  }

  public postQuestionsCategory(q: Category) {
    return this.http.post<Category>(this.endPoint.CATEGORY + 'questions', q);
  }

  public getQuestionnairesCategories() {
    return this.http.get<Category[]>(this.endPoint.CATEGORY + 'questionnaires');
  }

  public postQuestionsnaireCategory(q: Category) {
    return this.http.post<Category>(this.endPoint.CATEGORY + 'questionnaires', q);
  }

}
