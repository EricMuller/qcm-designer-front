import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {ValidationStatusDraft} from '@app/features/qcm-rest-api/model/enums/ValidationStatus';
import {Questionnaire} from '@app/features/qcm-rest-api/model/questionnaire.model';
import {QuestionnaireService} from '@app/features/qcm-rest-api/services/questionnaire.service';
import {Observable, of} from 'rxjs';


@Injectable()
export class QuestionnaireResolver implements Resolve<Questionnaire> {

  constructor(private questionnaireService: QuestionnaireService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Questionnaire> | Promise<Questionnaire> | Questionnaire {
    if (route.params.uuid && route.params.uuid !== '0') {
      return this.questionnaireService.getQuestionnaireByUuid(route.params.uuid);
    } else {
      const q = new Questionnaire();
      q.status = ValidationStatusDraft;
      return of(q);
    }
  }
}
