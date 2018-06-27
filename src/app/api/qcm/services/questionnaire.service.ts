import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Questionnaire} from '../model/questionnaire.model';
import {Observable} from 'rxjs/Observable';
import {Page} from './page';
import {API} from './api';
import {Filter} from '../../../features/shared/ui/filter/filter';
import {Question} from '../../index';

@Injectable()
export class QuestionnaireService {

  constructor(private http: HttpClient) {
  }

  public getQuestionnaires(page?: number, size?: number, sort?: string): Observable<Page> {
    const requestUrl = `${API.QUESTIONNAIRES}?size=${size}&page=${page}&sort=${sort}`;
    return this.http.get<Page>(requestUrl).publishLast().refCount();
  }

  public getQuestionnairesByFilters(filters: Filter[], page?: number, size?: number, sort?: string): Observable<Page> {
    const filterString = btoa(JSON.stringify(filters));
    const requestUrl = `${API.QUESTIONNAIRES}?size=${size}&page=${page}&sort=${sort}&filters=${filterString}`;
    return this.http.get<Page>(requestUrl).publishLast().refCount();
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

  public putQuestionnaire(q: Questionnaire) {
    return this.http.put<Questionnaire>(API.QUESTIONNAIRES, q);
  }

  public getPageQuestionsProjectionByQuestionnaireId(questionnaireId: Number): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(API.QUESTIONNAIRES + questionnaireId.toString() + '/questions').publishLast().refCount();
  }

  public putQuestion(id: Number, question: Question) {
    return this.http.put<Questionnaire>(API.QUESTIONNAIRES + id.toString() + '/questions', question);
  }

}
