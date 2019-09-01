import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {QcmApi} from '@app/features/qcm-rest-api/qcm-api';
import {Page} from './page';
import {Observable} from 'rxjs';

import {Tag} from '../model/tag.model';
import {Criteria} from '@app/features/qcm-rest-api/model/criteria';
import {publishLast, refCount} from 'rxjs/operators';

@Injectable()
export class TagService {

  constructor(private http: HttpClient) {
  }


  public posTag(tag: Tag) {
    return this.http.post<Tag>(QcmApi.TAGS, tag);
  }

  public getTags(page?: number, size?: number, sort?: string): Observable<Page> {
    const requestUrl = `${QcmApi.TAGS}?size=${size}&page=${page}&sort=${sort}`;
    return this.http.get<Page>(requestUrl);
  }

  public getTagsByCriteria(criteria: Criteria[], page?: number, size?: number, sort?: string): Observable<Page> {
    const search = btoa(JSON.stringify(criteria));

    const requestUrl = `${QcmApi.TAGS}?size=${size}&page=${page}&sort=${sort}&search=${search}`;
    return this.http.get<Page>(requestUrl).pipe(publishLast(), refCount());
  }


}
