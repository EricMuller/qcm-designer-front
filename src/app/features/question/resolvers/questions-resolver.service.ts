import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Page} from '@app/shared/qcm-rest-api/services/page';
import {QuestionService} from '@app/shared/qcm-rest-api/services/question.service';
import {Observable} from 'rxjs';

import {environment} from '../../../../environments/environment';


@Injectable()
export class QuestionsResolver {

  constructor(private questionService: QuestionService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Page> | Promise<Page> | Page {
    return this.questionService.getQuestions(0, environment.PAGE_SIZE, 'dateModification');
  }
}
