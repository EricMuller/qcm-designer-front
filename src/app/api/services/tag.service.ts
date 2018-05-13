import {Injectable} from '@angular/core';
import {Tag} from '../model/tag.model';
import {HttpClient} from '@angular/common/http';
import {API} from './api';
import {Page} from './page';
import {Observable} from 'rxjs/Observable';

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


}
