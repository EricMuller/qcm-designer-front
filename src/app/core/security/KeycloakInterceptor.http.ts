import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NotifierService} from 'app/core/simple-notifier.service';
import {KeycloakService} from './keycloak.service';


@Injectable()
export class KeyCloakInterceptor implements HttpInterceptor {

  constructor(private  notifierService: NotifierService, private keycloakService: KeycloakService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const tokenPromise: Promise<string> = this.keycloakService.getToken();
    const tokenObservable: Observable<string> = Observable.fromPromise(tokenPromise);

    return tokenObservable
      .flatMap<string, HttpEvent<any>>((accessToken) => {
        if (!accessToken) {
          return next.handle(req);
        }

        const request = req.clone({
          setHeaders: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        return next.handle(request);
      });
  }

  // req = req.clone({
  //   setHeaders: {
  //     Authorization: JWT
  //   }
  // });


  //
  // return next.handle(req).do((event: HttpEvent<any>) => {
  //   if (event instanceof HttpResponse) {
  //     const contentType = event.headers.get('Content-Type');
  //     if (event.status === 401 || event.status === 400 || event.status === 422) {
  //       if ('application/json' === contentType) {
  //         this.notifierService.notifyError(event.body.exception);
  //       } else {
  //         this.notifierService.notifyError(event.body);
  //       }
  //       return Observable.empty();
  //     }
  //   }
  // }).catch(err => {
  //     if (err instanceof HttpErrorResponse) {
  //       if (err.status === 401 || err.status === 400 || err.status === 422) {
  //         return Observable.throw(err);
  //       }
  //     } else {
  //       this.notifierService.notifyError(err.exception);
  //       return Observable.empty();
  //     }
  //   }
  // )

}
