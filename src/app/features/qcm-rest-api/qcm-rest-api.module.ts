import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {KeyCloakInterceptor} from '@app/core/http-interceptors/KeycloakInterceptor.http';
import {CategoryService} from './services/category.service';
import {QuestionService} from './services/question.service';

import {QuestionnaireService} from './services/questionnaire.service';
import {TagService} from './services/tag.service';
import {UserService} from './services/user.service';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [],
  providers: [QuestionService, QuestionnaireService, UserService, CategoryService, TagService,
    {provide: HTTP_INTERCEPTORS, useClass: KeyCloakInterceptor, multi: true}]
})
export class QcmRestApiModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: QcmRestApiModule,
      providers: [QuestionService, QuestionnaireService, UserService, TagService, CategoryService, TagService]
    };
  }
}
