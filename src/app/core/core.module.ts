import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {MatSnackBarModule} from '@angular/material';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CookieService} from 'ngx-cookie-service';
import {TranslateCacheModule, TranslateCacheService, TranslateCacheSettings} from 'ngx-translate-cache';
import {KeycloakGuardService} from './auth/keycloak-guard.service';
import {KeycloakService} from './auth/keycloak.service';
import {KeyCloakInterceptor} from './http-interceptors/KeycloakInterceptor.http';
import {NotifierService} from './notifications/simple-notifier.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function translateCacheServiceFactory(translateService: TranslateService, translateCacheSettings:TranslateCacheSettings) {
  return new TranslateCacheService(translateService, translateCacheSettings)
}

@NgModule({
  imports: [HttpClientModule, MatSnackBarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: translateCacheServiceFactory,
        deps: [TranslateService, TranslateCacheSettings]
      }
    })
  ],
  declarations: [],
  providers: [NotifierService, KeycloakGuardService, CookieService, KeycloakService,
    {provide: HTTP_INTERCEPTORS, useClass: KeyCloakInterceptor, multi: true}],
  exports: [TranslateModule]

})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [NotifierService, KeycloakGuardService, CookieService, KeycloakService]
    };
  }

  constructor(private translate: TranslateService, private translateCacheService: TranslateCacheService) {
    translateCacheService.init();
    translate.setDefaultLang('fr');
    translate.addLangs(['fr', 'en', 'ru']);
    const browserLang = translateCacheService.getCachedLanguage() || translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }
}
