import {Injectable} from '@angular/core';
import {AppState} from '@app/app/state/app-state.service';
import {QuestionnaireModel} from '@app/app/state/questionnaire-model';
import {Criteria} from '@app/features/qcm-rest-api/model/criteria';
import {Question} from '@app/features/qcm-rest-api/model/question.model';
import {Page} from '@app/features/qcm-rest-api/services/page';
import {QuestionService} from '@app/features/qcm-rest-api/services/question.service';
import {QuestionnaireService} from '@app/features/qcm-rest-api/services/questionnaire.service';
import {SelectStoreAdapter} from '@app/features/stores/selection-store';
import {CriteriaStore, CrudStore} from '@app/features/stores/store-api';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {mergeMap, publishLast, refCount} from 'rxjs/operators';


@Injectable()
export class QuestionnaireQuestionListStore extends SelectStoreAdapter<Question>
  implements CriteriaStore<Question>, CrudStore<Question, string> {

  @Select(AppState.currentQuestionnaire) public currentQuestionnaire$: Observable<QuestionnaireModel>;

  constructor(private questionService: QuestionService, private questionnaireService: QuestionnaireService, private store: Store) {
    super();

    this
      .currentQuestionnaire$
      .subscribe((q) => {
          this.deleteCriteriabyName('questionnaire_uuid');
          if (q) {
            this.addCriteria(new Criteria(q.uuid, 'questionnaire_uuid'));
          }
        }
      )
    ;
  }

  getElement(uuid: string): Observable<Question> {
    return this.questionService.getQuestionByUuid(uuid);
  }

  getPage(page ?: number, size ?: number, sort ?: string): Observable<Page> {
    const obs = this.questionService.getQuestions(page, size, sort);
    obs.subscribe(
      p => {
        this.publishPage(p);
      });
    return obs;
  }

  deleteElement(question: Question): Observable<Question> {

    const q = this.store.selectSnapshot<QuestionnaireModel>(AppState.currentQuestionnaire);

    return this.questionnaireService
      .deleteQuestionByUuid(q.uuid, question.uuid)
      .pipe(
        mergeMap((data) => {
          return this.deletePageElement(question);
        }));
  }

  deleteElements(questions: Question[]) {

    const q = this.store.selectSnapshot<QuestionnaireModel>(AppState.currentQuestionnaire);

    for (const question of questions) {
      this.questionnaireService.deleteQuestionByUuid(q.uuid, question.uuid)
        .subscribe((data) => {
            return this.deletePageElement(question);
          }
        );
    }
  }

  saveElement(element: Question): Observable<Question> {
    if (element.uuid) {
      return this.questionService.putQuestion(element);
    } else {
      return this.questionService.postQuestion(element);
    }
  }

  getPageByCriteria(criteria: Criteria[], page ?: number, size ?: number, sort ?: string): Observable<Page> {

    console.log(criteria);
    const obs = this.questionService
      .getQuestionsByCriteria(criteria, page, size, sort)
      .pipe(publishLast(), refCount());
    obs.subscribe(
      p => {
        this.publishPage(p);
      });
    return obs;
  }

  clearCriteria() {
    // check constructor
  }

}
