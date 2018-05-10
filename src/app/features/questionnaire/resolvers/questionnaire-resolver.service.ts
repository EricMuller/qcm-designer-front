import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Questionnaire} from '../../../api/model/questionnaire.model';
import {Observable} from 'rxjs/Observable';
import {QuestionnaireService} from '../../../api/services/questionnaire.service';


@Injectable()
export class QuestionnaireResolver implements Resolve<Questionnaire> {

  constructor(private questionnaireService: QuestionnaireService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Questionnaire> | Promise<Questionnaire> | Questionnaire {
    if(route.params.id > 0 ) {
      return this.questionnaireService.getQuestionnaireById(route.params.id);
    }else{

      return Observable.of(new Questionnaire())
    }
  }
}
