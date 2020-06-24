import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {KeycloakGuard} from '@app/core/auth/keycloak.guard';
import {UserGuard} from '@app/shared/auth/user.guard';
import {of} from 'rxjs';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {

  constructor(private keycloakGuard: KeycloakGuard, private userGuard: UserGuard, private router: Router) {
  }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  public async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {

    if (await this.keycloakGuard.canActivate(next, state).pipe(take(1)).toPromise() === false) {
      return of(false).toPromise();
    }

    if (await this.userGuard.canActivate(next, state).pipe(take(1)).toPromise() === false) {
      return of(this.router.parseUrl('/user/edit')).toPromise();
    }

    return of(true).toPromise();
  }

}
