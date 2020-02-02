import {Injectable} from '@angular/core';
import {User} from '@app/core/auth/user.model';
import {Tag} from '@app/features/qcm-rest-api/model/tag.model';
import {UserService} from '@app/features/qcm-rest-api/services/user.service';
import {SelectStoreAdapter} from '@app/features/stores/selection-store';
import {CrudStore} from '@app/features/stores/store-api';
import {Observable, of} from 'rxjs';


@Injectable()
export class UserStore extends SelectStoreAdapter<Tag> implements CrudStore<User, number> {

  constructor(private userService: UserService) {

    super();
    console.log('UserStore:constructor');
  }

  getElement(id: number): Observable<User> {
    return undefined;
  }

  deleteElement(user: User): Observable<User> {
    return of(user);
  }

  saveElement(element: User): Observable<User> {

    return this.userService.postUser(element);

  }

  clearCriteria() {

  }


}
