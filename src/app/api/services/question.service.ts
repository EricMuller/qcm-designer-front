import {Injectable} from '@angular/core';
import {Question} from '../model/question.model'
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {Page} from './page';
import {API} from './api';


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

  public getQuestions(page?: number, size?: number, sort?: string): Observable<Page> {
    const requestUrl = `${API.QUESTIONS}?size=${size}&page=${page}&sort=${sort}`;
    return this.http.get<Page>(requestUrl);
  }

  public getPageQuestionsByQuestionnaireId(questionnaireId: Number): Observable<Page> {
    return this.http.get<Page>(API.QUESTIONS + '?questionnaireId=' + questionnaireId.toString()).share();
  }


}
