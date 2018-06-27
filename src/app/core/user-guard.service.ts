import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../api/qcm/services/user.service';
import {Observable} from 'rxjs/Rx';
import {User} from '../api/qcm/model/user.model';
import {NotifierService} from './simple-notifier.service';
import {Subject} from 'rxjs/Subject';
import {KeycloakService} from './security/keycloak.service';

@Injectable()
export class UserGuardService implements CanActivate, CanActivateChild {

  private loginSubject = new Subject<boolean>();

  constructor(private userService: UserService, private router: Router,
              private notifierService: NotifierService,
              private keycloakService: KeycloakService) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    const tokenPromise: Promise<string> = this.keycloakService.getToken();
    const tokenObservable: Observable<string> = Observable.fromPromise(tokenPromise);

    // return this.userService.getCurrentUser().map(
    return tokenObservable.map(
      (token) => {
        return true;
      }
    ).catch(error => {
      this.notifierService.notifyError('Please LogIn' + error)
      return Observable.of(false);
    });
  }

  public logout() {
    this.keycloakService.logout();
    // this.userService.clearUser();
  }

  public isAuthentified(): Boolean {
    const user: User = this.keycloakService.getUser();
    return user == null ? false : true;
  }

  public getUser(): User {
    return this.keycloakService.getUser();
  }

  public getToken(): Observable<string> {
    const tokenPromise: Promise<string> = this.keycloakService.getToken();
    return Observable.fromPromise(tokenPromise);
  }

}
