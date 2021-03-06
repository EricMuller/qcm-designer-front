import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Criteria} from '@app/features/qcm-rest-api/model/criteria';
import {QCM_API_ENDPOINT_TOKEN, QcmApiEndPoint} from '@app/features/qcm-rest-api/qcm-api-end-point';
import {Observable} from 'rxjs';
import {publishLast, refCount} from 'rxjs/operators';
import {Question, QuestionPatch} from '../model/question.model';
import {Page} from './page';


@Injectable()
export class QuestionService {

  constructor(private http: HttpClient, @Inject(QCM_API_ENDPOINT_TOKEN) private endPoint: QcmApiEndPoint) {
  }

  public getQuestionByUuid(questionUuid: string): Observable<Question> {
    return this.http.get<Question>(this.endPoint.QUESTIONS + questionUuid);
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

  public deleteQuestionByUuid(uuid: string) {
    return this.http.delete<Question>(this.endPoint.QUESTIONS + uuid);
  }

  public getQuestions(page?: number, size?: number, sort?: string): Observable<Page> {
    const requestUrl = `${this.endPoint.QUESTIONS}?size=${size}&page=${page}&sort=${sort}`;
    return this.http.get<Page>(requestUrl);
  }

  // public getQuestionsByQuestionnaireUuid(questionnaireUuid: string): Observable<Question[]> {
  //   return this.http.get<Question[]>(this.endPoint.QUESTIONS + '?questionnaireId=' + questionnaireUuid);
  // }

  // public getPageQuestionsByQuestionnaireUuid(questionnaireUuid: string): Observable<Page> {
  //   alert('getPageQuestionsByQuestionnaireUuid');
  //   return this.http.get<Page>(this.endPoint.QUESTIONS + '?questionnaireId=' + questionnaireUuid);
  // }

  public getPageQuestionsByQuestionnaireUuid(questionnaireUuid: string, page?: number, size?: number, sort?: string): Observable<Page> {

    console.warn('question.services-getPageQuestionsByQuestionnaireUuid');
    return this.http.get<Page>(`${this.endPoint.QUESTIONNAIRES}${questionnaireUuid}/questions?size=${size}&page=${page}&sort=${sort}`)
      .pipe(publishLast(), refCount());
  }

  public postQuestion(q: Question) {
    return this.http.post<Question>(this.endPoint.QUESTIONS, q);
  }

  public putQuestion(q: Question) {
    return this.http.put<Question>(this.endPoint.QUESTIONS, q);
  }

  public patchQuestion(uuid: string, questionPatch: QuestionPatch) {
    return this.http.patch<Question>(this.endPoint.QUESTIONS + uuid, questionPatch);
  }

}
