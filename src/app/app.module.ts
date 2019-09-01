import {OverlayContainer} from '@angular/cdk/overlay';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialComponentsModule} from '@app/shared/material-components/material-components.module';
import {QcmRestApiModule} from '@app/features/qcm-rest-api/qcm-rest-api.module';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app/app.component';
import {CoreModule} from './core/core.module';
import {HomeComponent} from './features/home/home.component';
import {QuestionStore} from './features/stores/question-store.service';
import {AngularModule} from './shared/angular/angular.module';
import {MaterialModule} from './shared/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent],
  imports: [
    BrowserAnimationsModule,
    AngularModule,
    MaterialModule,
    QcmRestApiModule.forRoot(),
    CoreModule.forRoot(),
    FlexLayoutModule,
    AppRoutingModule,
    MaterialComponentsModule,
  ],
  providers: [QuestionStore],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('light-blue-theme');
  }

}
