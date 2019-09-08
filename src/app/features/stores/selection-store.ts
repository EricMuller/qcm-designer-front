import {Entity} from '@app/features/qcm-rest-api/model/entity';
import {Page} from '@app/features/qcm-rest-api/services/page';
import {BehaviorSubject, Observable, of, ReplaySubject, Subject} from 'rxjs';
import {ListSelectStore} from './store-api';


export class SelectStoreAdapter<T extends Entity> implements ListSelectStore<T> {

  protected page: Page;

  private pageSubject: Subject<Page> = new ReplaySubject<Page>(1);

  readonly page$: Observable<Page> = this.pageSubject.asObservable();

  private selectedSubject: BehaviorSubject<any[]> = new BehaviorSubject([]) as BehaviorSubject<T[]>;

  private elementsSubject: BehaviorSubject<any[]> = new BehaviorSubject([]) as BehaviorSubject<T[]>;

  private deletedSubject = new ReplaySubject<T>();

  selected$: Observable<T[]> = this.selectedSubject.asObservable() as Observable<T[]>;

  deleted$: Observable<T> = this.deletedSubject.asObservable();

  elements$: Observable<T[]> = this.elementsSubject.asObservable() as Observable<T[]>;

  public selected: T[] = [];

  constructor() {
  }


  publishPage(p: Page) {
    this.page = p;
    this.pageSubject.next(this.page);
    this.elementsSubject.next(this.page.content);
  }

  swapElement(q: T) {
    const itemIndex = this.selected.findIndex(item => item.id === q.id);

    if (itemIndex === -1) {
      this.selected.push(q);
      this.selectedSubject.next(this.selected);
    } else {
      this.selected.splice(itemIndex, 1);
      this.selectedSubject.next(this.selected);
    }
  }

  deletePageElement(q: T): Observable<T> {
    this.selectElement(q, false);
    const itemIndex = this.page.content.findIndex(item => item.id === q.id);
    if (itemIndex !== -1) {
      this.page.content.splice(itemIndex, 1);
      this.pageSubject.next(this.page);
    }
    return of(q);
  }

  addPageElement(q: T): Observable<T> {
    this.page.content.push(q);
    this.pageSubject.next(this.page);
    return of(q);
  }

  selectElement(q: T, select: boolean): Observable<T> {
    const itemIndex = this.selected.findIndex(item => item.id === q.id);
    if (select && itemIndex === -1) {
      this.selected.push(q);
      this.selectedSubject.next(this.selected);
    } else {
      if (!select && itemIndex !== -1) {
        this.selected.splice(itemIndex, 1);
        this.selectedSubject.next(this.selected);
        this.deletedSubject.next(q);
      }
    }
    return of(q);

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
