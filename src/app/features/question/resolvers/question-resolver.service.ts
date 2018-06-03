import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Question} from '../../../api';
import {QuestionService} from '../../../api/services/question.service';

@Injectable()
export class QuestionResolver {

  constructor(private questionService: QuestionService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Question> | Promise<Question> | Question {
    if (route.params.id > 0) {
      return this.questionService.getQuestionById(route.params.id);
    } else {
      return Observable.of(new Question())
    }
  }
}
