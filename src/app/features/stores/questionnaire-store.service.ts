import {Injectable} from '@angular/core';
import {Criteria} from '@app/features/qcm-rest-api/model/criteria';
import {Question} from '@app/features/qcm-rest-api/model/question.model';
import {Questionnaire} from '@app/features/qcm-rest-api/model/questionnaire.model';
import {Page} from '@app/features/qcm-rest-api/services/page';
import {QuestionnaireService} from '@app/features/qcm-rest-api/services/questionnaire.service';
import {SelectStoreAdapter} from '@app/features/stores/selection-store';
import {CrudStore, CriteriaStore} from '@app/features/stores/store-api';
import {TagStore} from '@app/features/stores/tag-store.service';

import {Observable, of, ReplaySubject, Subject} from 'rxjs';

import {mergeMap} from 'rxjs/operators';


@Injectable()
export class QuestionnaireStore extends SelectStoreAdapter<Questionnaire>
  implements CriteriaStore<Questionnaire>, CrudStore<Questionnaire> {

  private _page: Subject<Page> = new ReplaySubject<Page>(1);

  readonly page$: Observable<Page> = this._page.asObservable();

  constructor(private backend: QuestionnaireService, private tagStore: TagStore) {
    super();
  }

  getPage(page?: number, size?: number, sort?: string): Observable<Page> {
    const obs = this.backend.getQuestionnaires(page, size, sort);
    obs.subscribe(
      p => {
        this._page.next(p);
      });
    return obs;
  }

  deleteElement(questionnaire: Questionnaire): Observable<Questionnaire> {
    return this.backend.deleteQuestionnaireById(questionnaire.id)
      .pipe(mergeMap((data) => {
        this.selectElement(questionnaire, false);
        return of(questionnaire);
      }));
  }


  deleteElements(questionnaires: Questionnaire[]) {
    for (const q of questionnaires) {
      const id: number = q.id;
      this.backend.deleteQuestionnaireById(id).subscribe((data) => {
          this.selectElement(q, false);
        }
      )
    }
  }



  saveElement(element: Questionnaire): Observable<Questionnaire> {
    if (element.id > 0) {
      return this.backend.putQuestionnaire(element);
    } else {
      return this.backend.postQuestionnaire(element);
    }
  }

  public addQuestion(q: Questionnaire, question: Question) {
    return this.backend.putQuestion(q.id, question);

  }

  // criterias(): Criteria[] {
  //   return this.selected.map((q) => {
  //     return new Criteria(q.id.toString(), 'questionnaire_id');
  //   });
  // }
  //
  // clearCriterias() {
  //
  // }

  getPageByCriteria(criteria: Criteria[], page?: number, size?: number, sort?: string): Observable<Page> {
    console.log(criteria);
    const obs = this.backend.getQuestionnairesByCriteria(criteria, page, size, sort);
    obs.subscribe(
      p => {
        this._page.next(p);
      });
    return obs;
  }

  criterias(): Criteria[] {

    const criteria: Criteria[] =  this.tagStore.selected.map((tag) => {
      return new Criteria(tag.id.toString(), 'tag_id');
    });

    Array.prototype.push.apply(criteria);

    return criteria;
  }

  clearCriterias() {
    this.tagStore.unSelectAllElement();
  }

}
