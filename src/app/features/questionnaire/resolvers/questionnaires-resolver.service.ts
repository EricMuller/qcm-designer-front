import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Page} from '@app/shared/qcm-rest-api/services/page';
import {QuestionnaireService} from '@app/shared/qcm-rest-api/services/questionnaire.service';
import {Observable} from 'rxjs';
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
