import {Injectable} from '@angular/core';
import {Criteria} from '@app/features/qcm-rest-api/model/criteria';
import {Tag} from '@app/features/qcm-rest-api/model/tag.model';
import {Page} from '@app/features/qcm-rest-api/services/page';
import {TagService} from '@app/features/qcm-rest-api/services/tag.service';
import {SelectStoreAdapter} from '@app/features/stores/selection-store';
import {CrudStore, CriteriaStore} from '@app/features/stores/store-api';
import {Observable, of, ReplaySubject, Subject} from 'rxjs';


@Injectable()
export class TagStore extends SelectStoreAdapter<Tag> implements CriteriaStore<Tag>, CrudStore<Tag> {

  private _page: Subject<Page> = new ReplaySubject<Page>(1);

  readonly page$: Observable<Page> = this._page.asObservable();

  constructor(private backend: TagService) {

    super();
    console.log('TagStore:constructor');
  }

  getPage(page?: number, size?: number, sort?: string): Observable<Page> {
    const obs = this.backend.getTags(page, size, sort);
    obs.subscribe(
      p => {
        this._page.next(p);
      });
    return obs;
  }

  deleteElement(tag: Tag): Observable<Tag> {
    return of(tag);
  }

  deleteElements(tags: Tag[]) {
    for (const tag of tags) {
      this.selectElement(tag, false);
    }
  }

  getPageByCriteria(criteria: Criteria[], page?: number, size?: number, sort?: string): Observable<Page> {
    const obs = this.backend.getTagsByCriteria(criteria, page, size, sort);
    obs.subscribe(
      p => {
        this._page.next(p);
      });
    return obs;
  }


  criterias(): Criteria[] {
    return this.selected.map((tag) => {
      return new Criteria(tag.id.toString(), 'tag_id');
    });
  }

  saveElement(element: Tag): Observable<Tag> {
    return null;
  }

  clearCriterias() {
    this.unSelectAllElement();
  }


}
