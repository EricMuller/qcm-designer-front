import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import {Subject} from 'rxjs/Subject';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {SelectStore} from './selection-store';
import {DataSelectionStore} from './store-api';
import {Questionnaire} from '@api/qcm/model/questionnaire.model';
import {Page} from '@api/qcm/services/page';
import {QuestionnaireService} from '@api/qcm/services/questionnaire.service';
import {Criteria} from '@api/qcm/model/criteria';
import {Question} from '@api/qcm/model/question.model';

@Injectable()
export class QuestionnaireStore extends SelectStore<Questionnaire> implements DataSelectionStore<Questionnaire> {

  private _page: Subject<Page> = new ReplaySubject<Page>(1);

  readonly page$: Observable<Page> = this._page.asObservable();

  constructor(private backend: QuestionnaireService) {
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
    return this.backend.deleteQuestionnaireById(questionnaire.id).mergeMap((data) => {
      this.selectElement(questionnaire, false);
      return Observable.of(questionnaire);
    });
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

  getPageByCriteria(filters: Criteria[], page?: number, size?: number, sort?: string): Observable<Page> {
    const obs = this.backend.getQuestionnairesByFilters(filters, page, size, sort);
    obs.subscribe(
      p => {
        this._page.next(p);
      });
    return obs;
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

  filters(): Criteria[] {
    return this.selected.map((q) => {
      return new Criteria(q.id.toString(), 'questionnaire_id');
    });
  }

}
