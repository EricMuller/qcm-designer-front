import {User} from '@app/core/auth/user.model';
import {Observable} from 'rxjs/internal/Observable';

export interface IUserService {
   getCurrentUser(): Observable<User> ;
}
