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
import {EpicDialogComponent} from '../epic/epic-dialog/epic-dialog.component';
import {EpicModule} from '../epic/epic.module';
import {SearchStore} from './services/questionnaire-search-store.service';
import {TagModule} from '../tag/tag.module';
import {CovalentModule} from '../../shared/covalent/covalent.module';
import {FilterModule} from '../filter/filter.module';
import {QuestionnaireNavListComponent} from './questionnaire-list/questionnaire-nav-list/questionnaire-nav-list.component';
import {QuestionnaireStore} from './stores/questionnaire-store.service';
import {SelectStore} from '../../shared/emu/stores/selection-store';


@NgModule({
  imports: [
    CommonModule,
    CovalentModule,
    AngularModule,
    LayoutsModule,
    QuestionModule,
    UserModule,
    EmuModule,
    EpicModule,
    TagModule,
    FilterModule
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
    QuestionnaireNavListComponent
  ], entryComponents: [QuestionnaireDialogComponent, QuestionnaireToolBarComponent, EpicDialogComponent],
  providers: [SearchStore, QuestionnaireStore]
})
export class QuestionnaireModule {
}
