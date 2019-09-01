import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Criteria} from '@app/features/qcm-rest-api/model/criteria';
import {QCM_API_ENDPOINT_TOKEN, QcmApiEndPoint} from '@app/features/qcm-rest-api/qcm-api-end-point';
import {Observable} from 'rxjs';
import {Question} from '../model/question.model'
import {Questionnaire} from '../model/questionnaire.model';
import {Page} from './page';


@Injectable()
export class QuestionService {

  constructor(private http: HttpClient, @Inject(QCM_API_ENDPOINT_TOKEN) private endPoint: QcmApiEndPoint) {
  }

  public getQuestionById(questionId: number): Observable<Question> {
    return this.http.get<Question>(this.endPoint.QUESTIONS + questionId.toString());
  }

  public getQuestionsByQuestionnaireId(questionnaireId: number): Observable<Question[]> {
    return this.http.get<Question[]>(this.endPoint.QUESTIONS + '?questionnaireId=' + questionnaireId.toString());
  }

  public getQuestionsByCriteria(criteria: Criteria[], page?: number, size?: number, sort?: string): Observable<Page> {
    console.log(criteria);
    let params = '';
    if (criteria) {
      for (let i = 0; i < criteria.length; i++) {
        params += '&' + criteria[i].name + '=' + criteria[i].value;
      }
    }
    const requestUrl = `${this.endPoint.QUESTIONS}?size=${size}&page=${page}&sort=${sort}` + params;
    return this.http.get<Page>(requestUrl);
  }

  public deleteQuestionById(id: number) {
    return this.http.delete<Questionnaire>(this.endPoint.QUESTIONS + id.toString());
  }

  public getQuestions(page?: number, size?: number, sort?: string): Observable<Page> {
    const requestUrl = `${this.endPoint.QUESTIONS}?size=${size}&page=${page}&sort=${sort}`;
    return this.http.get<Page>(requestUrl);
  }

  public getPageQuestionsByQuestionnaireId(questionnaireId: number): Observable<Page> {
    return this.http.get<Page>(this.endPoint.QUESTIONS + '?questionnaireId=' + questionnaireId.toString());
  }

  public postQuestion(q: Question) {
    return this.http.post<Question>(this.endPoint.QUESTIONS, q);
  }

  public putQuestion(q: Question) {
    return this.http.put<Question>(this.endPoint.QUESTIONS, q);
  }


}
