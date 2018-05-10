import {NgModule} from '@angular/core';
// application
import {AppComponent} from './app.component';
/* shared*/
/* boostrap*/
import {ApiModule} from './api/api.module';
import {AppRoutingModule} from './app-routing.module';
import {CovalentModule} from './shared/covalent/covalent.module';
import {AngularModule} from './shared/angular/angular.module';
import {CoreModule} from './core/core.module';
import {LayoutsModule} from './shared/layouts/layouts.module';
import {QuestionnaireModule} from './features/questionnaire/questionnaire.module';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    AngularModule,
    ApiModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    CovalentModule,
    LayoutsModule,
    QuestionnaireModule
  ],
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
