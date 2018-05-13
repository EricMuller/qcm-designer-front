import {Injectable} from '@angular/core';
import {Tag} from '../../../api/model/tag.model';
import {SelectStore} from '../../../shared/emu/stores/selection-store';
import {DataSelectionStore, FilterStore} from '../../../shared/emu/stores/store-api';
import {Observable} from 'rxjs/Observable';
import {Page} from '../../../api/services/page';
import {TagService} from '../../../api/services/tag.service';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Subject} from 'rxjs/Subject';
import {Filter} from '../../filter/filter';

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

  getPageByFilters(filters: Filter[], page?: number, size?: number, sort?: string): Observable<Page> {
    const obs = this.backend.getTags(page, size, sort);
    obs.subscribe(
      p => {
        this._page.next(p);
      });
    return obs;
  }


  filters(): Filter[] {
    return this.selected.map((tag) => {
        return new Filter(tag.id, 'tag');
      });
  }




}
