import {Injectable} from '@angular/core';
import {Criteria} from '@app/features/qcm-rest-api/model/criteria';
import {Question} from '@app/features/qcm-rest-api/model/question.model';
import {Page} from '@app/features/qcm-rest-api/services/page';
import {QuestionService} from '@app/features/qcm-rest-api/services/question.service';
import {QuestionnaireStore} from '@app/features/stores/questionnaire-store.service';
import {SelectStoreAdapter} from '@app/features/stores/selection-store';
import {CriteriaStore, CrudStore} from '@app/features/stores/store-api';
import {TagStore} from '@app/features/stores/tag-store.service';
import {Observable} from 'rxjs';
import {mergeMap, publishLast, refCount} from 'rxjs/operators';


@Injectable()
export class QuestionStore extends SelectStoreAdapter<Question> implements CriteriaStore<Question>, CrudStore<Question> {

  constructor(private questionService: QuestionService, private tagStore: TagStore, private questionnaireStore: QuestionnaireStore) {
    super();

    this.tagStore.selected$.subscribe((tags) => {
      this.deleteCriteriabyName('tag_id');
      for (const tag of tags) {
        this.addCriteria(new Criteria(tag.id.toString(), 'tag_id'));
      }
    });


    this.questionnaireStore.selected$.subscribe((questionnaires) => {
      this.deleteCriteriabyName('questionnaire_id');
      for (const tag of questionnaires) {
        this.addCriteria(new Criteria(tag.id.toString(), 'questionnaire_id'));
      }
    });
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
    return this.questionService.deleteQuestionById(question.id).pipe(
      mergeMap((data) => {
        return this.deletePageElement(question);
      }));
  }

  deleteElements(questions: Question[]) {
    for (const question of questions) {
      const id: number = question.id;
      this.questionService.deleteQuestionById(id).subscribe((data) => {
          return this.deletePageElement(question);
        }
      );
    }
  }

  saveElement(element: Question): Observable<Question> {
    if (element.id > 0
    ) {
      return this.questionService.putQuestion(element);
    } else {
      return this.questionService.postQuestion(element);
    }
  }

  getPageByCriteria(criteria: Criteria[], page ?: number, size ?: number, sort ?: string): Observable<Page> {

    console.log(criteria);
    const obs = this.questionService.getQuestionsByCriteria(criteria, page, size, sort)
      .pipe(publishLast(), refCount());
    obs.subscribe(
      p => {
        this.publishPage(p);
      });
    return obs;
  }

  clearCriteria() {
    // check constructor
    this.tagStore.unSelectAllElement();
    this.questionnaireStore.unSelectAllElement();
  }

}
