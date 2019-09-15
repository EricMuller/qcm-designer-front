import {Injectable} from '@angular/core';
import {Criteria} from '@app/features/qcm-rest-api/model/criteria';

import {QuestionnaireStore} from './questionnaire-store.service';
import {TagStore} from './tag-store.service';

@Injectable()
export class SearchStore  {

  constructor(private tagStore: TagStore, private questionnaireStore: QuestionnaireStore) {
  }

  // criterias(): Criteria[] {
  //
  //   const criteria: Criteria[] = this.tagStore.criterias();
  //   const questionnaires: Criteria[] = this.questionnaireStore.criterias();
  //   Array.prototype.push.apply(criteria, questionnaires);
  //
  //   return criteria;
  // }
  //
  // clearCriterias() {
  //   this.tagStore.unSelectAllElement();
  //   this.questionnaireStore.unSelectAllElement();
  // }

}
