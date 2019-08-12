import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot} from '@angular/router';
import {QuestionService} from '@api/qcm/services/question.service';
import {Question} from '@api/qcm/model/question.model';


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
