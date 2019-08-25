import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {Criteria} from '@app/shared/qcm-rest-api/model/criteria';
import {Question} from '@app/shared/qcm-rest-api/model/question.model';
import {QcmApi} from '@app/shared/qcm-rest-api/qcm-api';
import {Observable} from 'rxjs';
import {publishLast, refCount} from 'rxjs/operators';
import {Questionnaire} from '../model/questionnaire.model';
import {Page} from './page';

@Injectable()
export class QuestionnaireService {

  constructor(private http: HttpClient) {
  }

  public getQuestionnaires(page?: number, size?: number, sort?: string): Observable<Page> {
    const requestUrl = `${QcmApi.QUESTIONNAIRES}?size=${size}&page=${page}&sort=${sort}`;
    return this.http.get<Page>(requestUrl).pipe(publishLast(), refCount());
  }

  public getQuestionnairesByCriteria(criteria: Criteria[], page?: number, size?: number, sort?: string): Observable<Page> {

    let params = '';
    if (criteria) {
      for (let i = 0; i< criteria.length; i++) {
        params += '&' + criteria[i].name + '=' + criteria[i].value;
      }
    }
    const requestUrl = `${QcmApi.QUESTIONNAIRES}?size=${size}&page=${page}&sort=${sort}` + params;
    return this.http.get<Page>(requestUrl).pipe(publishLast(), refCount());
  }

  public deleteQuestionnaireById(id: Number) {
    return this.http.delete<Questionnaire>(QcmApi.QUESTIONNAIRES + id.toString());
  }

  public getQuestionnaireById(id: Number) {
    return this.http.get<Questionnaire>(QcmApi.QUESTIONNAIRES + id.toString());
  }

  public postQuestionnaire(q: Questionnaire) {
    return this.http.post<Questionnaire>(QcmApi.QUESTIONNAIRES, q);
  }

  public putQuestionnaire(q: Questionnaire) {
    return this.http.put<Questionnaire>(QcmApi.QUESTIONNAIRES, q);
  }

  public getPageQuestionsProjectionByQuestionnaireId(questionnaireId: Number): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(QcmApi.QUESTIONNAIRES + questionnaireId.toString() + '/questions')
      .pipe(publishLast(), refCount());
  }

  public putQuestion(id: Number, question: Question) {
    return this.http.put<Questionnaire>(QcmApi.QUESTIONNAIRES + id.toString() + '/questions', question);
  }

}
