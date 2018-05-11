import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Tag} from '../../../api/model/tag.model';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class TagSelectionService {

  private current = new BehaviorSubject<Array<Tag>>([]);

  private deleted = new ReplaySubject<Tag>();

  public current$: Observable<any> = this.current.asObservable();

  public deleted$: Observable<Tag> = this.deleted.asObservable();

  private tags: Tag[] = [];

  constructor() {
  }

  public swap(q: Tag) {
    const itemIndex = this.tags.findIndex(item => item.id === q.id);
    if (itemIndex === -1) {
      this.tags.push(q);
      this.current.next(this.tags);
    } else {
      this.tags.splice(itemIndex, 1);
      this.current.next(this.tags);
    }
  }

  public select(q: Tag, select: boolean) {
    const itemIndex = this.tags.findIndex(item => item.id === q.id);
    if (select && itemIndex === -1) {
      this.tags.push(q);
      this.current.next(this.tags);
    } else {
      if (!select && itemIndex !== -1) {
        this.tags.splice(itemIndex, 1);
        this.current.next(this.tags);
      }
    }
  }

  public isSelected(q: Tag): boolean {
    return q ? this.tags.findIndex(item => item.id === q.id) !== -1 : false;
  }

  public size(): number {
    return this.tags ? this.tags.length : 0;
  }

}
