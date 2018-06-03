import {Injectable} from '@angular/core';
import {Page} from '../../../api/services/page';
import {DataSelectionStore} from '../../../shared/emu/stores/store-api';
import {Subject} from 'rxjs/Subject';
import {SelectStore} from '../../../shared/emu/stores/selection-store';
import {Filter} from '../../../shared/emu/filter/filter';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Question} from '../../../api';
import {QuestionService} from '../../../api/services/question.service';
import {Questionnaire} from '../../../api/model/questionnaire.model';


@Injectable()
export class QuestionStore extends SelectStore<Question> implements DataSelectionStore<Question> {

  private _page: Subject<Page> = new ReplaySubject<Page>(1);

  readonly page$: Observable<Page> = this._page.asObservable();

  constructor(private backend: QuestionService) {
    super();
  }

  getPage(page?: number, size?: number, sort?: string): Observable<Page> {
    const obs = this.backend.getQuestions(page, size, sort);
    obs.subscribe(
      p => {
        this._page.next(p);
      });
    return obs;
  }

  deleteElement(question: Question): Observable<Question> {
    return this.backend.deleteQuestionById(question.id).mergeMap((data) => {
      this.selectElement(question, false);
      return Observable.of(question);
    });
  }

  deleteElements(questions: Question[]) {
    for (const q of questions) {
      const id: number = q.id;
      this.backend.deleteQuestionById(id).subscribe((data) => {
          this.selectElement(q, false);
        }
      )
    }
  }

  getPageByFilters(filters: Filter[], page?: number, size?: number, sort?: string): Observable<Page> {
    const obs = this.backend.getQuestionsByFilters(filters, page, size, sort);
    obs.subscribe(
      p => {
        this._page.next(p);
      });
    return obs;
  }

  saveElement(element: Question): Observable<Question> {
    if (element.id > 0) {
      return  this.backend.putQuestion(element);
    } else {
      return this.backend.postQuestion(element);
    }
  }
}
