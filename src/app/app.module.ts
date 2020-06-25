import {OverlayContainer} from '@angular/cdk/overlay';
import {HttpClient} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppState} from '@app/app/state/app-state.service';
import {QuestionListStore} from '@app/features/stores/question-list-store.service';
import {MaterialComponentsModule} from '@app/shared/material-components/material-components.module';
import {QcmRestApiModule} from '@app/features/qcm-rest-api/qcm-rest-api.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AppRoutingModule} from '@app/app-routing.module';

import {AppComponent} from '@app/app/app.component';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsModule} from '@ngxs/store';
import {CoreModule, createTranslateLoader} from './core/core.module';
import {HomeComponent} from '@app/features/home/home.component';

import {AngularModule} from '@app/shared/angular/angular.module';
import {MaterialModule} from '@app/shared/material/material.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent],
  imports: [
    BrowserAnimationsModule,
    AngularModule,
    MaterialModule,
    NgxsModule.forRoot([AppState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    QcmRestApiModule.forRoot(),
    CoreModule.forRoot(),
    FlexLayoutModule,
    AppRoutingModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    MaterialComponentsModule,
  ],
  providers: [QuestionListStore],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(overlayContainer: OverlayContainer) {
   overlayContainer.getContainerElement().classList.add('light-blue-theme');
  }

}
