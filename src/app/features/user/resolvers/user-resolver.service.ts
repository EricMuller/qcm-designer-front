import {Injectable} from '@angular/core';
import {User} from '@app/core/auth/user.model';
import {UserService} from '@app/features/qcm-rest-api/services/user.service';

import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';



@Injectable()
export class UserResolver implements Resolve<User> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser();
  }
}
