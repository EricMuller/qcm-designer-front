import {Injectable} from '@angular/core';
import {Criteria} from '@app/features/qcm-rest-api/model/criteria';
import {Tag} from '@app/features/qcm-rest-api/model/tag.model';
import {Page} from '@app/features/qcm-rest-api/services/page';
import {TagService} from '@app/features/qcm-rest-api/services/tag.service';
import {SelectStoreAdapter} from '@app/features/stores/selection-store';
import {CriteriaStore, CrudStore} from '@app/features/stores/store-api';
import {Observable, of } from 'rxjs';


@Injectable()
export class TagStore extends SelectStoreAdapter<Tag> implements CriteriaStore<Tag>, CrudStore<Tag> {

  constructor(private backend: TagService) {

    super();
    console.log('TagStore:constructor');

    this.selected$.subscribe((tags) => {
      this.deleteCriteriabyName('tag_id');
      for (const tag of tags) {
        this.addCriteria(new Criteria(tag.id.toString(), 'tag_id'));
      }
    });

  }

  getPage(page?: number, size?: number, sort?: string): Observable<Page> {
    const obs = this.backend.getTags(page, size, sort);
    obs.subscribe(
      p => {
        this.publishPage(p);
      });
    return obs;
  }

  deleteElement(tag: Tag): Observable<Tag> {
    return of(tag);
  }

  deleteElements(tags: Tag[]) {
    for (const tag of tags) {
      this.deleteElement(tag);
    }
  }

  getPageByCriteria(criteria: Criteria[], page?: number, size?: number, sort?: string): Observable<Page> {
    const obs = this.backend.getTagsByCriteria(criteria, page, size, sort);
    obs.subscribe(
      p => {
        this.publishPage(p);
      });
    return obs;
  }

  saveElement(element: Tag): Observable<Tag> {
    return null;
  }

  clearCriteria() {

  }


}
