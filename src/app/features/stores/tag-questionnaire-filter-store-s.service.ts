import {Injectable} from '@angular/core';
import {FilterStore} from './store-api';
import {Criteria} from '@api/qcm/model/criteria';
import {QuestionnaireStore} from './questionnaire-store.service';
import {TagStore} from './tag-store.service';

@Injectable()
export class TagQuestionnaireFilterStore implements FilterStore {

  constructor(private tagStore: TagStore, private questionnaireStore: QuestionnaireStore) {
  }

  filters(): Criteria[] {

    const filters: Criteria[] = this.tagStore.filters();
    const questionnaires: Criteria[] = this.questionnaireStore.filters();
    Array.prototype.push.apply(filters, questionnaires);

    return filters;

  }

  clearFilter() {
    this.tagStore.unSelectAllElement();
    this.questionnaireStore.unSelectAllElement();
  }




}
