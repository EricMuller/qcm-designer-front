import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Questionnaire} from '@app/shared/qcm-rest-api/model/questionnaire.model';
import {QuestionnaireService} from '@app/shared/qcm-rest-api/services/questionnaire.service';
import {Observable} from 'rxjs';


@Injectable()
export class QuestionsQuestionnaireResolver {

  constructor(private questionnaireService: QuestionnaireService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Questionnaire[]> | Promise<Questionnaire[]> | Questionnaire[] {
    return this.questionnaireService.getPageQuestionsProjectionByQuestionnaireId(route.params.id);
  }

}
