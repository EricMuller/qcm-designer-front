import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuestionnaireService} from './services/questionnaire.service';
import {QuestionService} from './services/question.service';
import {UserService} from './services/user.service';
import {EpicService} from './services/epic.service';
import {HttpClientModule} from '@angular/common/http';
import {TagService} from './services/tag.service';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [],
  providers: [QuestionnaireService, QuestionService, UserService, EpicService, TagService]
})
export class ApiModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [QuestionnaireService, QuestionService, UserService, TagService]
    };
  }
}
