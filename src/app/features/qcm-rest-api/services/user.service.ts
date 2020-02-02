import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {User} from '@app/core/auth/user.model';
import {QCM_API_ENDPOINT_TOKEN, QcmApiEndPoint} from '@app/features/qcm-rest-api/qcm-api-end-point';

import {CookieService} from 'ngx-cookie-service';


import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable()
export class UserService {

  const
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private user: User;

  constructor(private http: HttpClient, @Inject(QCM_API_ENDPOINT_TOKEN) private endPoint: QcmApiEndPoint,
              private coockieService: CookieService) {
  }

  public getCurrentUser(): Observable<User> {
    if (this.user == null) {

      return this.http.get(`${this.endPoint.USERS}me`).pipe(
        map(
          (user: User) => {
            this.user = user;
            return user;
          }));
    } else {
      return of(this.user);
    }

  }

  public getUser(): Observable<User> {
    return this.http.get(`${this.endPoint.USERS}me`).pipe(
      map(
        (user: User) => {
          this.user = user;
          return user;
        }));
  }

  public postUser(q: User) {
    return this.http.post<User>(this.endPoint.USERS, q);
  }


  // public clearUser(): void {
  //   this.user = null;
  //   this.coockieService.delete('Authorization', '/');
  // }
  //
  // public getUser(): User {
  //   return this.user;
  // }
  //
  // public logout() {
  //   this.http.get('/logout')
  //
  // }

  // public handleError(error: Reponse | any): Observable<any> {
  //   // In a real world app, we might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Reponse) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   if (errMsg) {
  //     console.error(errMsg);
  //   }
  //
  //
  //   return Observable.throw(error);
  // }

}
