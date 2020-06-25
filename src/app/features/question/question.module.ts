import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CategoryDialogComponent} from '@app/features/category/category-dialog/category-dialog.component';
import {CategoryModule} from '@app/features/category/category.module';
import {QuestionnaireQuestionNavListComponent} from '@app/features/question/questionnaire-questions-list/question-nav-list/questionnaire-question-nav-list.component';
import {QuestionnaireQuestionListComponent} from '@app/features/question/questionnaire-questions-list/questionnaire-question-list.component';
import {QuestionnaireSelectComponent} from '@app/features/question/questionnaire-select/questionnaire-select.component';
import {QuestionListStore} from '@app/features/stores/question-list-store.service';

import {QuestionnaireListStore} from '@app/features/stores/questionnaire-list-store.service';
import {QuestionnaireQuestionListStore} from '@app/features/stores/questionnaire-question-list-store.service';
import {TagListStore} from '@app/features/stores/tag-list-store.service';
import {SearchStore} from '@app/features/stores/tag-questionnaire-filter-store-s.service';
import {TagModule} from '@app/features/tag/tag.module';
import {UserModule} from '@app/features/user/user.module';
import {AngularModule} from '@app/shared/angular/angular.module';
import {MaterialComponentsModule} from '@app/shared/material-components/material-components.module';
import {MaterialModule} from '@app/shared/material/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {QuestionDialogComponent} from './question-dialog/question-dialog.component';
import {QuestionFormComponent} from './question-form/question-form.component';
import {QuestionListComponent} from './question-list/question-list.component';
import {QuestionNavListComponent} from './question-list/question-nav-list/question-nav-list.component';

@NgModule({
  imports: [
    AngularModule,
    MaterialModule,
    UserModule,
    TagModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    CategoryModule,
    TranslateModule.forChild(),
  ],
  declarations: [QuestionListComponent, QuestionDialogComponent,
    QuestionNavListComponent, QuestionFormComponent, QuestionnaireSelectComponent,
    QuestionnaireQuestionListComponent, QuestionnaireQuestionNavListComponent],
  entryComponents: [QuestionDialogComponent, CategoryDialogComponent],
  exports: [QuestionListComponent],
  providers: [SearchStore, QuestionnaireListStore, TagListStore, QuestionListStore, QuestionnaireQuestionListStore]
})
export class QuestionModule {


}
