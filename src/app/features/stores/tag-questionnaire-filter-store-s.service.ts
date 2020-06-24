import {Injectable} from '@angular/core';
import {Criteria} from '@app/features/qcm-rest-api/model/criteria';

import {QuestionnaireListStore} from './questionnaire-list-store.service';
import {TagListStore} from './tag-list-store.service';

@Injectable()
export class SearchStore  {

  constructor(private tagListStore: TagListStore, private questionnaireListStore: QuestionnaireListStore) {
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
