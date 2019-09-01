import {Criteria} from '@app/features/qcm-rest-api/model/criteria';
import {Entity} from '@app/features/qcm-rest-api/model/entity';
import {Page} from '@app/features/qcm-rest-api/services/page';
import {Observable} from 'rxjs';


export interface CrudStore<T extends Entity> {

  deleteElement(element: T): Observable<T>;

  saveElement(element: T): Observable<T>;
}

export interface ListStore<T extends Entity> {

  deleteElements(elements: T[]): void;

  getPage(page?: number, size?: number, sort?: string): Observable<Page>;

}

export interface ListSelectStore<T extends Entity> {

  readonly deleted$: Observable<any>;
  readonly selected$: Observable<T[]>;

  swapElement(q: T): void;

  selectElement(q: T, select: boolean): void;

  isSelected(q: T): boolean;

  selectedSize(): number;

  unSelectAllElement(): void;

}

/**
 *
 */
export interface CriteriaStore<T> extends ListSelectStore<T>, ListStore<T> {
  getPageByCriteria(criteria: Criteria[], page?: number, size?: number, sort?: string): Observable<Page>;

  criterias(): Criteria[];

  clearCriterias();
}

