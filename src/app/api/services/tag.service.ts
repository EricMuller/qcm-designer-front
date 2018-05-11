import {Injectable} from '@angular/core';
import {Tag} from '../model/tag.model';
import {HttpClient} from '@angular/common/http';
import {API} from './api';
import {Page} from '../model/page.models';

@Injectable()
export class TagService {

  constructor(private http: HttpClient) {
  }

  public getTags() {
    return this.http.get<Page>(API.TAGS);
  }

  public posTag(tag: Tag) {
    return this.http.post<Tag>(API.TAGS, tag);
  }

}
