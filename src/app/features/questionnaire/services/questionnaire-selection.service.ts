import {Injectable} from '@angular/core';
import {Questionnaire} from '../../../api/model/questionnaire.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {QuestionnaireService} from '../../../api/services/questionnaire.service';
import {ReplaySubject} from 'rxjs/ReplaySubject';


@Injectable()
export class QuestionnaireSelectionService {

  private current = new BehaviorSubject<Array<Questionnaire>>([]);

  private deleted = new ReplaySubject<Questionnaire>();

  public current$: Observable<any> = this.current.asObservable();

  public deleted$: Observable<Questionnaire> = this.deleted.asObservable();

  private questionnaires: Questionnaire[] = [];

  constructor(private questionnaireService: QuestionnaireService) {
  }

  public swap(q: Questionnaire) {
    const itemIndex = this.questionnaires.findIndex(item => item.id === q.id);
    if (itemIndex === -1) {
      this.questionnaires.push(q);
      this.current.next(this.questionnaires);
    } else {
      this.questionnaires.splice(itemIndex, 1);
      this.current.next(this.questionnaires);
    }
  }

  public select(q: Questionnaire, select: boolean) {
    const itemIndex = this.questionnaires.findIndex(item => item.id === q.id);
    if (select && itemIndex === -1) {
      this.questionnaires.push(q);
      this.current.next(this.questionnaires);
    }
    else if (!select && itemIndex !== -1) {
      this.questionnaires.splice(itemIndex, 1);
      this.current.next(this.questionnaires);
    }
  }

  public isSelected(q: Questionnaire): boolean {
    return q ? this.questionnaires.findIndex(item => item.id === q.id) !== -1 : false;
  }

  public size(): number {
    return this.questionnaires ? this.questionnaires.length : 0;
  }

  public deleteQuestionnaire(questionnaire: Questionnaire): Observable<Questionnaire> {
    return this.questionnaireService.deleteQuestionnaireById(questionnaire.id).mergeMap((data) => {
      this.select(questionnaire, false);
      return Observable.of(questionnaire);
    });
  }

  public deleteSelectedQuestionnaires() {
    for (const q of this.questionnaires) {
      const id: number = q.id;
      this.questionnaireService.deleteQuestionnaireById(id).subscribe((data) => {
          this.select(q, false);
          this.deleted.next(q);
        }
      )
    }
  }

}
