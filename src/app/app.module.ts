import {NgModule} from '@angular/core';
// application
import {AppComponent} from './app.component';
/* shared*/
/* boostrap*/

import {AppRoutingModule} from './app-routing.module';
import {AngularModule} from './shared/angular/angular.module';
import {CoreModule} from './core/core.module';
import {LayoutsModule} from './features/shared/layouts/layouts.module';
import {QuestionnaireModule} from './features/questionnaire/questionnaire.module';
import {HomeComponent} from './home/home.component';
import {MaterialModule} from './shared/material/material.module';
import {QuestionStore} from './features/stores/question-store.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ApiQcmModule} from '@api/qcm/api-qcm.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    AngularModule,
    ApiQcmModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    FlexLayoutModule,
    MaterialModule,
    LayoutsModule,
    QuestionnaireModule
  ], providers: [QuestionStore],
  bootstrap: [AppComponent]
})
export class AppModule {

}

// debug router trace in app-routing.module.ts
// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
