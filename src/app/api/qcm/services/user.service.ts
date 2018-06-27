import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {User} from 'app/api/qcm/model/user.model';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API} from './api';

@Injectable()
export class UserService {

  const
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private user: User;

  constructor(private http: HttpClient, private coockieService: CookieService) {
  }

  public getCurrentUser(): Observable<User> {
    if (this.user == null) {
      return this.http.get(`${API.USERS}/me`).map(
        (user: User) => {
          this.user = user;
          return user;
        });
    } else {
      return Observable.of(this.user);
    }

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

  // public handleError(error: Response | any): Observable<any> {
  //   // In a real world app, we might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
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
