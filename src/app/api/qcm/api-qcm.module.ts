import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuestionnaireService} from './services/questionnaire.service';
import {QuestionService} from './services/question.service';
import {UserService} from './services/user.service';
import {CategoryService} from './services/category.service';
import {HttpClientModule} from '@angular/common/http';
import {TagService} from './services/tag.service';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [],
  providers: [QuestionService, QuestionnaireService, UserService, CategoryService, TagService]
})
export class ApiQcmModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApiQcmModule,
      providers: [QuestionService, QuestionService, UserService, TagService]
    };
  }
}
