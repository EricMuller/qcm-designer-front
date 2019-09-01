import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {QuestionnaireSelectComponent} from '@app/features/question/questionnaire-select/questionnaire-select.component';
import {TagModule} from '@app/features/tag/tag.module';
import {UserModule} from '@app/features/user/user.module';
import {AngularModule} from '@app/shared/angular/angular.module';
import {MaterialComponentsModule} from '@app/shared/material-components/material-components.module';
import {MaterialModule} from '@app/shared/material/material.module';
import {QuestionStore} from '@app/features/stores/question-store.service';
import {QuestionnaireStore} from '@app/features/stores/questionnaire-store.service';
import {SearchStore} from '@app/features/stores/tag-questionnaire-filter-store-s.service';
import {TagStore} from '@app/features/stores/tag-store.service';
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
    TranslateModule,
  ],
  declarations: [QuestionListComponent, QuestionDialogComponent,
       QuestionNavListComponent, QuestionFormComponent, QuestionnaireSelectComponent],
  entryComponents: [QuestionDialogComponent],
  exports: [QuestionListComponent],
  providers: [SearchStore, QuestionnaireStore, TagStore, QuestionStore]
})
export class QuestionModule {


}
