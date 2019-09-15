import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {User} from '@app/core/auth/user.model';

import {Observable, of} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {catchError, flatMap, map} from 'rxjs/operators';
import {NotifierService} from '../notifications/simple-notifier.service';
import {KeycloakService} from './keycloak.service';

@Injectable()
export class KeycloakGuardService implements CanActivate, CanActivateChild {

  constructor(private router: Router,
              private notifierService: NotifierService,
              private keycloakService: KeycloakService) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return fromPromise(this.keycloakService.getToken()).pipe(
      map((token) => {
          return true;
        }
      ), catchError(error => {
        return this.notifierService
          .notifyError(error, '', 2000)
          .onAction()
          .pipe(flatMap(() => {
            this.login();
            return of(true);
          }));
      }));
  }

  public logout(){
    return this.keycloakService.logout();
  }

  public login(): void {
    return this.keycloakService.login();
  }

  public isLoggedIn(): boolean {
    return this.keycloakService.isLoggedIn();
  }

  public getUser(): User {
    return this.keycloakService.getUser();
  }

  public getToken(): Observable<string> {
    return fromPromise(this.keycloakService.getToken());
  }

}
