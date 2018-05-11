import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Questionnaire} from '../model/questionnaire.model';
import {Observable} from 'rxjs/Observable';
import {Page} from '../model/page.models';
import {API} from './api';

@Injectable()
export class QuestionnaireService {

  constructor(private http: HttpClient) {
  }

  // public getQuestionnaires(): Observable<Questionnaire[]> {
  //   return this.http.get<Questionnaire[]>('/api/v1/questionnaires').share();
  // }

  public getQuestionnaires(page?: number, size?: number, sort?: string): Observable<Page> {
    const requestUrl = `${API.QUESTIONNAIRES}?size=${size}&page=${page}&sort=${sort}`;
    return this.http.get<Page>(requestUrl);
  }

  public deleteQuestionnaireById(id: Number) {
    return this.http.delete<Questionnaire>(API.QUESTIONNAIRES + id.toString());
  }
  public getQuestionnaireById(id: Number) {
    return this.http.get<Questionnaire>(API.QUESTIONNAIRES + id.toString());
  }

  public postQuestionnaire(q: Questionnaire) {
    return this.http.post<Questionnaire>(API.QUESTIONNAIRES, q);
  }

  public getPageQuestionsProjectionByQuestionnaireId(questionnaireId: Number): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(API.QUESTIONNAIRES + questionnaireId.toString() + '/questions');
  }

}
