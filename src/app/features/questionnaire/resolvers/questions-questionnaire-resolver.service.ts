import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {QuestionnaireService} from '../../../api/services/questionnaire.service';
import {Questionnaire} from '../../../api/model/questionnaire.model';

@Injectable()
export class QuestionsQuestionnaireResolver {

  constructor(private questionnaireService: QuestionnaireService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Questionnaire[]> | Promise<Questionnaire[]> | Questionnaire[] {
    return this.questionnaireService.getPageQuestionsProjectionByQuestionnaireId(route.params.id);
  }

}
