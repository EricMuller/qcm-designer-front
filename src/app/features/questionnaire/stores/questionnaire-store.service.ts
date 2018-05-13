import {Injectable} from '@angular/core';
import {QuestionnaireService} from '../../../api/services/questionnaire.service';
import {Observable} from 'rxjs/Observable';
import {Page} from '../../../api/services/page';
import {Subject} from 'rxjs/Subject';
import {ReplaySubject} from 'rxjs/ReplaySubject';

import {Questionnaire} from '../../../api/model/questionnaire.model';
import {SelectStore} from '../../../shared/emu/stores/selection-store';
import {DataSelectionStore} from '../../../shared/emu/stores/store-api';
import {Filter} from '../../filter/filter';


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

  getPageByFilters(filters: Filter[], page?: number, size?: number, sort?: string): Observable<Page> {
    const obs = this.backend.getQuestionnairesByFilters(filters, page, size, sort);
    obs.subscribe(
      p => {
        this._page.next(p);
      });
    return obs;
  }

}
