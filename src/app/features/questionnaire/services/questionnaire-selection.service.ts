import {Injectable} from '@angular/core';
import {Questionnaire} from '../../../api/model/questionnaire.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {QuestionnaireService} from '../../../api/services/questionnaire.service';
import {ReplaySubject} from 'rxjs/ReplaySubject';


@Injectable()
export class QuestionnaireSelectionService {


  public questionnaires: Questionnaire[] = [];

  private currentSubject = new BehaviorSubject<Array<Questionnaire>>([]);

  public currentObservable: Observable<any> = this.currentSubject.asObservable();

  private deleteSubject = new ReplaySubject<Questionnaire>();

  public deletedObservable: Observable<Questionnaire> = this.deleteSubject.asObservable();

  constructor(private questionnaireService: QuestionnaireService) {
  }

  public swap(q: Questionnaire) {
    const itemIndex = this.questionnaires.findIndex(item => item.id === q.id);
    if (itemIndex === -1) {
      this.questionnaires.push(q);
      this.currentSubject.next(this.questionnaires);
    } else {
      this.questionnaires.splice(itemIndex, 1);
      this.currentSubject.next(this.questionnaires);
    }
  }

  public select(q: Questionnaire, select: boolean) {
    const itemIndex = this.questionnaires.findIndex(item => item.id === q.id);
    if (select && itemIndex === -1) {
      this.questionnaires.push(q);
      this.currentSubject.next(this.questionnaires);
    }
    else if (!select && itemIndex !== -1) {
      this.questionnaires.splice(itemIndex, 1);
      this.currentSubject.next(this.questionnaires);
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
          // this.removeById(id);
          this.deleteSubject.next(q);
        }
      )
    }
  }

}
