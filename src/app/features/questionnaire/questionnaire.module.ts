///<reference path="../../shared/covalent/covalent.module.ts"/>
import {QuestionnaireListComponent} from './questionnaire-list/questionnaire-list.component';
import {QuestionnaireDetailComponent} from './questionnaire-detail/questionnaire-detail.component';
import {QuestionnaireLeftSideNavComponent} from './questionnaire-left-side-nav/questionnaire-left-side-nav.component';
import {AngularModule} from '../../shared/angular/angular.module';
import {LayoutsModule} from '../../shared/layouts/layouts.module';
import {QuestionnaireImportComponent} from './questionnaire-import/questionnaire-import.component';
import {QuestionnaireAppComponent} from './questionnaire-app/questionnaire-app.component';
import {QuestionnaireDialogComponent} from './questionnaire-dialog/questionnaire-dialog.component';
import {QuestionnaireIndexComponent} from './questionnaire-index/questionnaire-index.component';
import {QuestionnaireDetailContentComponent} from './questionnaire-detail/questionnaire-detail-content/questionnaire-detail-content.component';
import {QuestionnaireToolBarComponent} from './questionnaire-tool-bar/questionnaire-tool-bar.component';
import {QuestionnaireQuestionListComponent} from './question-list/question-list.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {QuestionModule} from '../question/question.module';
import {UserModule} from '../user/user.module';
import {EmuModule} from '../../shared/emu/emu.module';
import {CategoryModule} from '../category/category.module';
import {SearchStore} from './services/questionnaire-search-store.service';
import {TagModule} from '../tag/tag.module';
import {CovalentModule} from '../../shared/covalent/covalent.module';
import {QuestionnaireNavListComponent} from './questionnaire-list/questionnaire-nav-list/questionnaire-nav-list.component';
import {QuestionnaireStore} from './stores/questionnaire-store.service';
import {QuestionnaireFilterComponent} from './search/questionnaire-filter/questionnaire-filter.component';
import {CategoryDialogComponent} from '../category/category-dialog/category-dialog.component';
import { QuestionnaireFormComponent } from './questionnaire-form/questionnaire-form.component';


@NgModule({
  imports: [
    CommonModule,
    CovalentModule,
    AngularModule,
    LayoutsModule,
    QuestionModule,
    UserModule,
    EmuModule,
    CategoryModule,
    TagModule
  ],
  declarations: [
    QuestionnaireToolBarComponent,
    QuestionnaireListComponent,
    QuestionnaireDetailComponent,
    QuestionnaireLeftSideNavComponent,
    QuestionnaireImportComponent,
    QuestionnaireAppComponent,
    QuestionnaireDialogComponent,
    QuestionnaireIndexComponent,
    QuestionnaireDetailContentComponent,
    QuestionnaireQuestionListComponent,
    QuestionnaireNavListComponent,
    QuestionnaireFilterComponent,
    QuestionnaireFormComponent
  ], entryComponents: [QuestionnaireDialogComponent, QuestionnaireToolBarComponent, CategoryDialogComponent],
  providers: [SearchStore, QuestionnaireStore]
})
export class QuestionnaireModule {
}
