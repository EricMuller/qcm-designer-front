import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CoreModule} from '@app/core/core.module';
import {CategoryDialogComponent} from '@app/features/category/category-dialog/category-dialog.component';
import {CategoryModule} from '@app/features/category/category.module';
import {ImportModule} from '@app/features/import/import.module';
import {QuestionModule} from '@app/features/question/question.module';
import {TagModule} from '@app/features/tag/tag.module';
import {UserModule} from '@app/features/user/user.module';
import {AngularModule} from '@app/shared/angular/angular.module';
import {MaterialComponentsModule} from '@app/shared/material-components/material-components.module';
import {MaterialModule} from '@app/shared/material/material.module';
import {QuestionnaireStore} from '@app/shared/stores/questionnaire-store.service';
import {TagStore} from '@app/shared/stores/tag-store.service';
import {TranslateService} from '@ngx-translate/core';
import {QuestionnaireQuestionListComponent} from './question-list/question-list.component';
import {QuestionnaireDialogComponent} from './questionnaire-dialog/questionnaire-dialog.component';
import {QuestionnaireFormComponent} from './questionnaire-form/questionnaire-form.component';
import {QuestionnaireListComponent} from './questionnaire-list/questionnaire-list.component';
import {QuestionnaireNavListComponent} from './questionnaire-list/questionnaire-nav-list/questionnaire-nav-list.component';
import {QuestionnaireQuestionsComponent} from './questionnaire-questions/questionnaire-questions.component';
import {SearchStore} from './services/questionnaire-search-store.service';


@NgModule({
  imports: [
    CommonModule,
    AngularModule,
    MaterialModule,
    QuestionModule,
    UserModule,
    CategoryModule,
    TagModule,
    ImportModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    CoreModule
  ],
  declarations: [
    QuestionnaireListComponent,
    QuestionnaireDialogComponent,
    QuestionnaireQuestionListComponent,
    QuestionnaireNavListComponent,
    QuestionnaireFormComponent,
    QuestionnaireQuestionsComponent,
  ],
  entryComponents: [QuestionnaireDialogComponent, CategoryDialogComponent],
  providers: [SearchStore, QuestionnaireStore, TagStore]
})
export class QuestionnaireModule {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }
}
