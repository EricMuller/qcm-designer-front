import {Injectable} from '@angular/core';
import {FilterStore} from './store-api';
import {Filter} from '../shared/ui/filter/filter';
import {QuestionnaireStore} from './questionnaire-store.service';
import {TagStore} from './tag-store.service';

@Injectable()
export class TagQuestionnaireFilterStore implements FilterStore {

  constructor(private tagStore: TagStore, private questionnaireStore: QuestionnaireStore) {
  }

  filters(): Filter[] {

    const filters: Filter[] = this.tagStore.filters();
    const questionnaires: Filter[] = this.questionnaireStore.filters();
    Array.prototype.push.apply(filters, questionnaires);

    return filters;

  }

  clearFilter() {
    this.tagStore.unSelectAllElement();
    this.questionnaireStore.unSelectAllElement();
  }




}
