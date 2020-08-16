import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {KeyCloakInterceptor} from '@app/core/http-interceptors/KeycloakInterceptor.http';
import {QCM_API_ENDPOINT_TOKEN} from '@app/features/qcm-rest-api/qcm-api-end-point';
import {ExportService} from '@app/features/qcm-rest-api/services/export.service';
import {ImportService} from '@app/features/qcm-rest-api/services/import.service';
import {UploadService} from '@app/features/qcm-rest-api/services/upload.service';
import {WebHookService} from '@app/features/qcm-rest-api/services/web-hook.service';

import {environment} from '../../../environments/environment';
import {CategoryService} from './services/category.service';
import {QuestionService} from './services/question.service';

import {QuestionnaireService} from './services/questionnaire.service';
import {TagService} from './services/tag.service';
import {UserService} from './services/user.service';

export const QCM_API_ENDPOINT = {
  CATEGORY: environment.QCM_REST_API_HOST + '/qcm/api/v1/categories/',
  EXPORT: environment.QCM_REST_API_HOST + '/qcm/api/v1/exports/',
  QUESTIONNAIRES: environment.QCM_REST_API_HOST + '/qcm/api/v1/questionnaires/',
  QUESTIONS: environment.QCM_REST_API_HOST + '/qcm/api/v1/questions/',
  TAGS: environment.QCM_REST_API_HOST + '/qcm/api/v1/tags/',
  UPLOADS: environment.QCM_REST_API_HOST + '/qcm/api/v1/uploads/',
  USERS: environment.QCM_REST_API_HOST + '/qcm/api/v1/users/',
  IMPORTS: environment.QCM_REST_API_HOST + '/qcm/api/v1/imports/',
  WEBHOOKS: environment.QCM_REST_API_HOST + '/qcm/api/v1/webhooks/',
};

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [],
  providers: [QuestionService, QuestionnaireService, UserService, CategoryService, TagService, ImportService,
    {provide: HTTP_INTERCEPTORS, useClass: KeyCloakInterceptor, multi: true},
    {provide: QCM_API_ENDPOINT_TOKEN, useValue: QCM_API_ENDPOINT}]
})
export class QcmRestApiModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: QcmRestApiModule,
      providers: [QuestionService, QuestionnaireService, UserService, TagService, CategoryService,
        TagService, UploadService, ExportService, ImportService, WebHookService]
    };
  }
}
