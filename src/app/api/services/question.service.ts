import {Injectable} from '@angular/core';
import {Question} from '../model/question.model'
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {Page} from './page';
import {API} from './api';
import {Questionnaire} from '../model/questionnaire.model';
import {Filter} from '../../shared/emu/filter/filter';


@Injectable()
export class QuestionService {

  constructor(private http: HttpClient) {
  }

  public getQuestionById(questionId: Number): Observable<Question> {
    return this.http.get<Question>(API.QUESTIONS + questionId.toString()).share();
  }

  public getQuestionsByQuestionnaireId(questionnaireId: Number): Observable<Question[]> {
    return this.http.get<Question[]>(API.QUESTIONS + '?questionnaireId=' + questionnaireId.toString()).share();
  }

  public getQuestionsByFilters(filters: Filter[], page?: number, size?: number, sort?: string): Observable<Page> {
    const filterString = btoa(JSON.stringify(filters));
    const requestUrl = `${API.QUESTIONS}?size=${size}&page=${page}&sort=${sort}&filters=${filterString}`;
    return this.http.get<Page>(requestUrl).publishLast().refCount();
  }

  public deleteQuestionById(id: Number) {
    return this.http.delete<Questionnaire>(API.QUESTIONS + id.toString());
  }

  public getQuestions(page?: number, size?: number, sort?: string): Observable<Page> {
    const requestUrl = `${API.QUESTIONS}?size=${size}&page=${page}&sort=${sort}`;
    return this.http.get<Page>(requestUrl);
  }

  public getPageQuestionsByQuestionnaireId(questionnaireId: Number): Observable<Page> {
    return this.http.get<Page>(API.QUESTIONS + '?questionnaireId=' + questionnaireId.toString()).share();
  }

  public postQuestion(q: Question) {
    return this.http.post<Question>(API.QUESTIONS, q);
  }

  public putQuestion(q: Question) {
    return this.http.put<Question>(API.QUESTIONS, q);
  }


}
