import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {QuestionService} from '@api/qcm/services/question.service';
import {Page} from '@api/qcm/services/page';
import {environment} from '../../../../environments/environment';





@Injectable()
export class QuestionsResolver {

  constructor(private questionService: QuestionService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Page> | Promise<Page> | Page {
    return this.questionService.getQuestions(0, environment.PAGE_SIZE, 'dateModification');
  }
}
