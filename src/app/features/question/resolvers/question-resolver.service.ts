import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {QuestionTypeFreeText} from '@app/features/qcm-rest-api/model/enums/QuestionType';
import {ValidationStatusDraft} from '@app/features/qcm-rest-api/model/enums/ValidationStatus';
import {Question} from '@app/features/qcm-rest-api/model/question.model';
import {QuestionService} from '@app/features/qcm-rest-api/services/question.service';
import {Observable, of} from 'rxjs';


@Injectable()
export class QuestionResolver {

  constructor(private questionService: QuestionService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Question> | Promise<Question> | Question {
    if (route.params.uuid && route.params.uuid !== '0') {
      return this.questionService.getQuestionByUuid(route.params.uuid);
    } else {
      const question = new Question();
      question.type = QuestionTypeFreeText;
      question.status = ValidationStatusDraft;

      return of(question);
    }
  }
}
