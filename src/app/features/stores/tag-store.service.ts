import {Injectable} from '@angular/core';
import {SelectStore} from './selection-store';
import {DataSelectionStore, FilterStore} from './store-api';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Subject} from 'rxjs/Subject';
import {Tag} from '@api/qcm/model/tag.model';
import {Page} from '@api/qcm/services/page';
import {TagService} from '@api/qcm/services/tag.service';
import {Criteria} from '@api/qcm/model/criteria';





@Injectable()
export class TagStore extends SelectStore<Tag> implements DataSelectionStore<Tag>, FilterStore {

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
    return Observable.of(tag);
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


  filters(): Criteria[] {
    return this.selected.map((tag) => {
      return new Criteria(tag.id.toString(), 'tag_id');
    });
  }

  saveElement(element: Tag): Observable<Tag> {
    return null;
  }

  clearFilter() {
    this.unSelectAllElement();
  }



}
