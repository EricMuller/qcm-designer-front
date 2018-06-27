import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Page} from '../../../api/qcm/services/page';
import {QuestionService} from '../../../api/qcm/services/question.service';

@Injectable()
export class PageQuestionsByQuestionnaireResolver {

  constructor(private questionService: QuestionService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Page> | Promise<Page> | Page {
    return this.questionService.getPageQuestionsByQuestionnaireId(route.params.id);
  }
}
