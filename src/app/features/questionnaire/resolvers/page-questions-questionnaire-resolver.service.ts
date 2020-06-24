import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Page} from '@app/features/qcm-rest-api/services/page';
import {QuestionService} from '@app/features/qcm-rest-api/services/question.service';
import {Observable} from 'rxjs';



@Injectable()
export class PageQuestionsByQuestionnaireResolver {

  constructor(private questionService: QuestionService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Page> | Promise<Page> | Page {
    return this.questionService.getPageQuestionsByQuestionnaireUuid(route.params.uuid);
  }
}
