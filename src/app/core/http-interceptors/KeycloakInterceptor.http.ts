import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {KeycloakService} from '../auth/keycloak.service';
import {fromPromise} from 'rxjs/internal-compatibility';
import {catchError, flatMap} from 'rxjs/operators';
import {NotifierService} from '@app/core/notifications/simple-notifier.service';


@Injectable()
export class KeyCloakInterceptor implements HttpInterceptor {

  constructor(private  notifierService: NotifierService, private keycloakService: KeycloakService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return fromPromise(this.keycloakService.getToken()).pipe(
      catchError(error => of(error)),
      flatMap((accessToken) => {
        console.log('KeyCloakInterceptor:' + accessToken);
        if (!accessToken) {
          return next.handle(req);
        }
        const request = req.clone({
          setHeaders: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        return next.handle(request);
      }));
  }

}
