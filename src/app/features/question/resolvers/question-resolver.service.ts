import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Question} from '@app/shared/qcm-rest-api/model/question.model';
import {QuestionService} from '@app/shared/qcm-rest-api/services/question.service';
import {Observable, of} from 'rxjs';


@Injectable()
export class QuestionResolver {

  constructor(private questionService: QuestionService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Question> | Promise<Question> | Question {
    if (route.params.id > 0) {
      return this.questionService.getQuestionById(route.params.id);
    } else {
      const question = new Question();
      question.id = 0;
      return of(question);
    }
  }
}
