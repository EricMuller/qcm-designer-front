import {Injectable} from '@angular/core';
import {Questionnaire} from '../../../../../api/model/questionnaire.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {QuestionnaireService} from '../../../../../api/services/questionnaire.service';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Entity} from '../../../../../api/model/entity';


export interface SelectionListStore<T extends Entity> {
  readonly deleted$: Observable<any>;
  readonly current$: Observable<T[]>;

  swapElement(q: T): void;

  selectElement(q: T, select: boolean): void;

  isSelected(q: Questionnaire): boolean;

  size(): number;

  deleteElement(questionnaire: T): Observable<T>;

  deleteSelectedElements(): void;
}

@Injectable()
export class DefaultSelectionListStore<T extends Entity> implements SelectionListStore<T> {

  private current: BehaviorSubject<any[]> = <BehaviorSubject<T[]>> new BehaviorSubject([]);

  private deleted = new ReplaySubject<T>();

  private _current$: Observable<T[]> = <Observable<T[]>> this.current.asObservable();

  private _deleted$: Observable<T> = this.deleted.asObservable();

  private elements: T[] = [];

  constructor(private questionnaireService: QuestionnaireService) {
  }

  get deleted$(): Observable<T> {
    return this._deleted$;
  }

  get current$(): Observable<T[]> {
    return this._current$;
  }

  swapElement(q: T) {
    const itemIndex = this.elements.findIndex(item => item.id === q.id);
    if (itemIndex === -1) {
      this.elements.push(q);
      this.current.next(this.elements);
    } else {
      this.elements.splice(itemIndex, 1);
      this.current.next(this.elements);
    }
  }

  selectElement(q: T, select: boolean) {
    const itemIndex = this.elements.findIndex(item => item.id === q.id);
    if (select && itemIndex === -1) {
      this.elements.push(q);
      this.current.next(this.elements);
    } else {
      if (!select && itemIndex !== -1) {
        this.elements.splice(itemIndex, 1);
        this.current.next(this.elements);
      }
    }
  }

  isSelected(q: Questionnaire): boolean {
    return q ? this.elements.findIndex(item => item.id === q.id) !== -1 : false;
  }

  size(): number {
    return this.elements ? this.elements.length : 0;
  }

  deleteElement(questionnaire: T): Observable<T> {
    return this.questionnaireService.deleteQuestionnaireById(questionnaire.id).mergeMap((data) => {
      this.selectElement(questionnaire, false);
      return Observable.of(questionnaire);
    });
  }

  deleteSelectedElements() {
    for (const q of this.elements) {
      const id: number = q.id;
      this.questionnaireService.deleteQuestionnaireById(id).subscribe((data) => {
          this.selectElement(q, false);
          this.deleted.next(q);
        }
      )
    }
  }

}
