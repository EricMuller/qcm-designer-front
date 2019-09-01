import {Entity} from '@app/features/qcm-rest-api/model/entity';
import {Page} from '@app/features/qcm-rest-api/services/page';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';
import {ListSelectStore} from './store-api';

export class SelectStoreAdapter<T extends Entity> implements ListSelectStore<T> {

  page$: Observable<Page>;

  private _selected: BehaviorSubject<any[]> = <BehaviorSubject<T[]>>new BehaviorSubject([]);

  private _deleted = new ReplaySubject<T>();

  private _selected$: Observable<T[]> = <Observable<T[]>>this._selected.asObservable();

  private _deleted$: Observable<T> = this._deleted.asObservable();

  public selected: T[] = [];

  constructor() {
  }

  get deleted$(): Observable<T> {
    return this._deleted$;
  }

  get selected$(): Observable<T[]> {
    return this._selected$;
  }

  swapElement(q: T) {
    const itemIndex = this.selected.findIndex(item => item.id === q.id);

    if (itemIndex === -1) {
      this.selected.push(q);
      this._selected.next(this.selected);
    } else {
      this.selected.splice(itemIndex, 1);
      this._selected.next(this.selected);
    }
  }

  selectElement(q: T, select: boolean) {
    const itemIndex = this.selected.findIndex(item => item.id === q.id);
    if (select && itemIndex === -1) {
      this.selected.push(q);
      this._selected.next(this.selected);
    } else {
      if (!select && itemIndex !== -1) {
        this.selected.splice(itemIndex, 1);
        this._selected.next(this.selected);
        this._deleted.next(q);
      }
    }

  }

  isSelected(q: T): boolean {
    return q ? this.selected.findIndex(item => item.id === q.id) !== -1 : false;
  }

  selectedSize(): number {
    return this.selected ? this.selected.length : 0;
  }

  unSelectAllElement() {
    this.selected.forEach((e) => this.selectElement(e, false));
  }

}
