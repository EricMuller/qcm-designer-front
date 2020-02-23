import {Injectable} from '@angular/core';
import {Criteria} from '@app/features/qcm-rest-api/model/criteria';
import {Question} from '@app/features/qcm-rest-api/model/question.model';
import {Questionnaire} from '@app/features/qcm-rest-api/model/questionnaire.model';
import {Page} from '@app/features/qcm-rest-api/services/page';
import {QuestionnaireService} from '@app/features/qcm-rest-api/services/questionnaire.service';
import {SelectStoreAdapter} from '@app/features/stores/selection-store';
import {CriteriaStore, CrudStore} from '@app/features/stores/store-api';
import {TagStore} from '@app/features/stores/tag-store.service';

import {Observable} from 'rxjs';

import {mergeMap} from 'rxjs/operators';


@Injectable()
export class QuestionnaireStore extends SelectStoreAdapter<Questionnaire>
  implements CriteriaStore<Questionnaire>, CrudStore<Questionnaire, number> {

  constructor(private questionnaireService: QuestionnaireService, private tagStore: TagStore) {
    super();

    this.tagStore.selected$.subscribe((tags) => {
      this.deleteCriteriabyName('tag_id');
      for (const tag of tags) {
        this.addCriteria(new Criteria(tag.id.toString(), 'tag_id'));
      }
    });

  }

  getElement(id: number): Observable<Questionnaire> {
    return  this.questionnaireService.getQuestionnaireById(id);
  }

  getPage(page?: number, size?: number, sort?: string): Observable<Page> {
    const obs = this.questionnaireService.getQuestionnaires(page, size, sort);
    obs.subscribe(
      p => {
        this.publishPage(p);
      });
    return obs;
  }

  deleteElement(questionnaire: Questionnaire): Observable<Questionnaire> {
    return this.questionnaireService.deleteQuestionnaireById(questionnaire.id)
      .pipe(mergeMap((data) => {
        return this.deletePageElement(questionnaire);
      }));
  }

  deleteElements(questionnaires: Questionnaire[]) {
    for (const q of questionnaires) {
      const id: number = q.id;
      this.questionnaireService.deleteQuestionnaireById(id)
        .subscribe((data) => {
            this.deletePageElement(q);
          }
        );
    }
  }

  saveElement(element: Questionnaire): Observable<Questionnaire> {
    if (element.id > 0) {
      return this.questionnaireService.putQuestionnaire(element);
    } else {
      return this.questionnaireService.postQuestionnaire(element);
    }
  }

  public addQuestion(q: Questionnaire, question: Question) {
    return this.questionnaireService.putQuestion(q.id, question);
  }


  getPageByCriteria(criteria: Criteria[], page?: number, size?: number, sort?: string): Observable<Page> {
    console.log(criteria);
    const obs = this.questionnaireService.getQuestionnairesByCriteria(criteria, page, size, sort);
    obs.subscribe(
      p => {
        this.publishPage(p);
      });
    return obs;
  }


  clearCriteria() {
    // check constuctor
    this.tagStore.unSelectAllElement();
  }

}
