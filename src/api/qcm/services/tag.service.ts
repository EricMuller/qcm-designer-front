import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API} from './api';
import {Page} from './page';
import {Observable} from 'rxjs/Observable';

import {Tag} from '../model/tag.model';
import {Criteria} from '@api/qcm/model/criteria';

@Injectable()
export class TagService {

  constructor(private http: HttpClient) {
  }


  public posTag(tag: Tag) {
    return this.http.post<Tag>(API.TAGS, tag);
  }

  public getTags(page?: number, size?: number, sort?: string): Observable<Page> {
    const requestUrl = `${API.TAGS}?size=${size}&page=${page}&sort=${sort}`;
    return this.http.get<Page>(requestUrl);
  }

  public getTagsByCriteria(criteria: Criteria[], page?: number, size?: number, sort?: string): Observable<Page> {
    const search = btoa(JSON.stringify(criteria));

    const requestUrl = `${API.TAGS}?size=${size}&page=${page}&sort=${sort}&search=${search}`;
    return this.http.get<Page>(requestUrl).publishLast().refCount();
  }


}
