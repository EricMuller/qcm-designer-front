import {Observable} from 'rxjs/Observable';
import {Page} from '../../../api/services/page';
import {Entity} from '../../../api/model/entity';
import {Filter} from '../filter/filter';

export interface DataSelectionStore<T> extends DataStore<T>, SelectionStore<T> {

  getPageByFilters(filters: Filter[], page?: number, size?: number, sort?: string): Observable<Page>;

}

export interface DataStore<T> {

  page$: Observable<Page>;

  getPage(page?: number, size?: number, sort?: string): Observable<Page>;

  deleteElement(element: T): Observable<T>;

  deleteElements(elements: T[]): void;

  saveElement(element: T): Observable<T>;

}

export interface SelectionStore<T extends Entity> {
  readonly deleted$: Observable<any>;
  readonly selected$: Observable<T[]>;

  swapElement(q: T): void;

  selectElement(q: T, select: boolean): void;

  isSelected(q: T): boolean;

  selectedSize(): number;

  unSelectAllElement(): void;

}

export interface FilterStore extends SelectionStore<any> {
  filters(): Filter[];
}

