import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {User} from '@app/core/auth/user.model';
import {QCM_API_ENDPOINT_TOKEN, QcmApiEndPoint} from '@app/features/qcm-rest-api/qcm-api-end-point';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService {

  private user: User;

  constructor(private http: HttpClient, @Inject(QCM_API_ENDPOINT_TOKEN) private endPoint: QcmApiEndPoint) {
  }

  public getCurrentUser(): Observable<User> {
    // debugger
    if (!this.user || !(this.user.uuid !== undefined && this.user.uuid !== null)) {
      return this.http.get(`${this.endPoint.USERS}me`)
        .pipe(
          map(
            (user: User) => {
              this.user = user;
              return user;
            }));
    } else {
       return of(this.user);
    }

  }
}
