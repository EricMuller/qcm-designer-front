import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {QuestionnaireService} from '../../../api/qcm/services/questionnaire.service';
import {Page} from '../../../api/qcm/services/page';
import {environment} from '../../../../environments/environment';

@Injectable()
export class QuestionnairesResolver {

  constructor(private questionnaireService: QuestionnaireService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Page> | Promise<Page> | Page {
    return this.questionnaireService.getQuestionnaires(0, environment.PAGE_SIZE, 'id');
  }
}
