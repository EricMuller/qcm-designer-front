import 'hammerjs';
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {KeycloakService} from './app/core/auth/keycloak.service';

if (environment.production) {
  enableProdMode();
}

if (environment.KEYCLOAK) {
  KeycloakService.init()
    .then(() => platformBrowserDynamic().bootstrapModule(AppModule))
    .catch(e => {
      console.error(e);
     });
} else {
  platformBrowserDynamic().bootstrapModule(AppModule);
}
