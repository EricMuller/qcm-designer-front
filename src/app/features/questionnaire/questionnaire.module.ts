///<reference path="../../shared/covalent/covalent.module.ts"/>
import {QuestionnaireListComponent} from './questionnaire-list/questionnaire-list.component';
import {QuestionnaireDetailComponent} from './questionnaire-detail/questionnaire-detail.component';
import {QuestionnaireLeftSideNavComponent} from '../navigation/questionnaire-left-side-nav/questionnaire-left-side-nav.component';
import {AngularModule} from '../../shared/angular/angular.module';
import {LayoutsModule} from '../shared/layouts/layouts.module';
import {QuestionnaireImportComponent} from '../import/questionnaire-import/questionnaire-import.component';
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
import {CategoryModule} from '../category/category.module';
import {SearchStore} from './services/questionnaire-search-store.service';
import {TagModule} from '../tag/tag.module';
import {CovalentModule} from '../../shared/covalent/covalent.module';
import {QuestionnaireNavListComponent} from './questionnaire-list/questionnaire-nav-list/questionnaire-nav-list.component';
import {QuestionnaireStore} from '../stores/questionnaire-store.service';
import {QuestionnaireFilterComponent} from './questionnaire-filter/questionnaire-filter.component';
import {CategoryDialogComponent} from '../category/category-dialog/category-dialog.component';
import {QuestionnaireFormComponent} from './questionnaire-form/questionnaire-form.component';
import {QuestionnaireQuestionsComponent} from './questionnaire-questions/questionnaire-questions.component';
import {ImportModule} from '../import/import.module';
import {NavigationModule} from '../navigation/navigation.module';
import {SharedModule} from '../shared/shared.module';
import {FabModule} from '../navigation/fab/fab.module';
import {UiModule} from '../shared/ui/ui.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    CovalentModule,
    AngularModule,
    LayoutsModule,
    QuestionModule,
    UserModule,
    SharedModule,
    CategoryModule,
    TagModule,
    ImportModule,
    NavigationModule,
    FabModule,
    LayoutsModule,
    NavigationModule,
    SharedModule,
    UiModule,
    FlexLayoutModule
  ],
  declarations: [
    QuestionnaireToolBarComponent,
    QuestionnaireListComponent,
    QuestionnaireDetailComponent,
    QuestionnaireImportComponent,
    QuestionnaireAppComponent,
    QuestionnaireDialogComponent,
    QuestionnaireIndexComponent,
    QuestionnaireDetailContentComponent,
    QuestionnaireQuestionListComponent,
    QuestionnaireNavListComponent,
    QuestionnaireFilterComponent,
    QuestionnaireFormComponent,
    QuestionnaireQuestionsComponent
  ],
  entryComponents: [QuestionnaireDialogComponent, QuestionnaireToolBarComponent, CategoryDialogComponent, QuestionnaireLeftSideNavComponent ],
  providers: [SearchStore, QuestionnaireStore]
})
export class QuestionnaireModule {
}
