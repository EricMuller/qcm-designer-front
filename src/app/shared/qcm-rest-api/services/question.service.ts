import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Criteria} from '@app/shared/qcm-rest-api/model/criteria';
import {QcmApi} from '@app/shared/qcm-rest-api/qcm-api';
import {Observable} from 'rxjs';
import {Question} from '../model/question.model'
import {Questionnaire} from '../model/questionnaire.model';
import {Page} from './page';


@Injectable()
export class QuestionService {

  constructor(private http: HttpClient) {
  }

  public getQuestionById(questionId: Number): Observable<Question> {
    return this.http.get<Question>(QcmApi.QUESTIONS + questionId.toString());
  }

  public getQuestionsByQuestionnaireId(questionnaireId: Number): Observable<Question[]> {
    return this.http.get<Question[]>(QcmApi.QUESTIONS + '?questionnaireId=' + questionnaireId.toString());
  }

  public getQuestionsByCriteria(criteria: Criteria[], page?: number, size?: number, sort?: string): Observable<Page> {
    console.log(criteria);
    let params = '';
    if (criteria) {
      for (let i = 0; i < criteria.length; i++) {
        params += '&' + criteria[i].name + '=' + criteria[i].value;
      }
    }
    const requestUrl = `${QcmApi.QUESTIONS}?size=${size}&page=${page}&sort=${sort}` + params;
    return this.http.get<Page>(requestUrl);
  }

  public deleteQuestionById(id: Number) {
    return this.http.delete<Questionnaire>(QcmApi.QUESTIONS + id.toString());
  }

  public getQuestions(page?: number, size?: number, sort?: string): Observable<Page> {
    const requestUrl = `${QcmApi.QUESTIONS}?size=${size}&page=${page}&sort=${sort}`;
    return this.http.get<Page>(requestUrl);
  }

  public getPageQuestionsByQuestionnaireId(questionnaireId: Number): Observable<Page> {
    return this.http.get<Page>(QcmApi.QUESTIONS + '?questionnaireId=' + questionnaireId.toString());
  }

  public postQuestion(q: Question) {
    return this.http.post<Question>(QcmApi.QUESTIONS, q);
  }

  public putQuestion(q: Question) {
    return this.http.put<Question>(QcmApi.QUESTIONS, q);
  }


}
