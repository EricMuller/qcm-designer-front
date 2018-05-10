import {NgModule} from '@angular/core';
import {UserGuardService} from './user-guard.service';
import {CookieService} from 'ngx-cookie-service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NotifierService} from './simple-notifier.service';
import {KeycloakService} from './security/keycloak.service';
import {KeyCloakInterceptor} from './security/KeycloakInterceptor.http';

@NgModule({
  imports: [],
  declarations: [],
  providers: [NotifierService, UserGuardService, CookieService,
    KeycloakService,
    {provide: HTTP_INTERCEPTORS, useClass: KeyCloakInterceptor, multi: true}]
})
export class CoreModule {
}
