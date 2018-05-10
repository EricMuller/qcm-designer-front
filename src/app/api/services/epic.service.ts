import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Epic} from '../model/epic.model';
import {API} from './api';

@Injectable()
export class EpicService {

  constructor(private http: HttpClient) {
  }

  public getEpics() {
    return this.http.get<Epic[]>(API.EPICS).share();
  }

  public postEpic(q: Epic) {
    return this.http.post<Epic>(API.EPICS, q);
  }

}
