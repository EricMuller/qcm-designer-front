import {Injectable} from '@angular/core';
import {QuestionnaireStore} from '@app/features/stores/questionnaire-store.service';
import {TagStore} from '@app/features/stores/tag-store.service';
import {Criteria} from '@app/features/qcm-rest-api/model/criteria';
import {Question} from '@app/features/qcm-rest-api/model/question.model';
import {Page} from '@app/features/qcm-rest-api/services/page';
import {QuestionService} from '@app/features/qcm-rest-api/services/question.service';
import {SelectStoreAdapter} from '@app/features/stores/selection-store';
import {CrudStore, CriteriaStore} from '@app/features/stores/store-api';
import {Observable, of, ReplaySubject, Subject} from 'rxjs';
import {mergeMap, publishLast, refCount} from 'rxjs/operators';


@Injectable()
export class QuestionStore extends SelectStoreAdapter<Question> implements CriteriaStore<Question>, CrudStore<Question> {


  private _page: Subject<Page> = new ReplaySubject<Page>(1);

  readonly page$: Observable<Page> = this._page.asObservable();

  constructor(private questionService: QuestionService, private tagStore: TagStore, private questionnaireStore: QuestionnaireStore) {
    super();
  }

  getPage(page?: number, size?: number, sort?: string): Observable<Page> {
    const obs = this.questionService.getQuestions(page, size, sort);
    obs.subscribe(
      p => {
        this._page.next(p);
      });
    return obs;
  }

  deleteElement(question: Question): Observable<Question> {
    return this.questionService.deleteQuestionById(question.id).pipe(
      mergeMap((data) => {
        this.selectElement(question, false);
        return of(question);
      }));
  }

  deleteElements(questions: Question[]) {
    for (const q of questions) {
      const id: number = q.id;
      this.questionService.deleteQuestionById(id).subscribe((data) => {
          this.selectElement(q, false);
        }
      )
    }
  }

  saveElement(element: Question): Observable<Question> {
    if (element.id > 0) {
      return this.questionService.putQuestion(element);
    } else {
      return this.questionService.postQuestion(element);
    }
  }

  getPageByCriteria(criteria: Criteria[], page?: number, size?: number, sort?: string): Observable<Page> {

    console.log(criteria);
    const obs = this.questionService.getQuestionsByCriteria(criteria, page, size, sort)
      .pipe(publishLast(), refCount());
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

    const questionnaires: Criteria[] =  this.questionnaireStore.selected.map((tag) => {
      return new Criteria(tag.id.toString(), 'questionnaire_id');
    });

    Array.prototype.push.apply(criteria, questionnaires);

    return criteria;
  }

  clearCriterias() {
    this.tagStore.unSelectAllElement();
    this.questionnaireStore.unSelectAllElement();
  }
}
