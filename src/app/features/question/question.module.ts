import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionListComponent} from './question-list/question-list.component';
import {CovalentModule} from '../../shared/covalent/covalent.module';
import {AngularModule} from '../../shared/angular/angular.module';
import {QuestionDialogComponent} from './question-dialog/question-dialog.component';
import {QuestionDetailComponent} from './question-detail/question-detail.component';
import {QuestionAppComponent} from './question-app/question-app.component';
import {QuestionSearchComponent} from './question-search/question-search.component';
import {QuestionToolBarComponent} from './question-tool-bar/question-tool-bar.component';
import {QuestionLeftSideNavComponent} from '../navigation/question-left-side-nav/question-left-side-nav.component';
import {UserModule} from '../user/user.module';
import {QuestionNavListComponent} from './question-list/question-nav-list/question-nav-list.component';
import {QuestionFilterComponent} from './question-filter/question-filter.component';
import {TagModule} from '../tag/tag.module';
import {MaterialModule} from '../../shared/material/material.module';
import {QuestionFormComponent} from './question-form/question-form.component';
import {NavigationModule} from '../navigation/navigation.module';
import {SharedModule} from '../shared/shared.module';
import {FabModule} from '../navigation/fab/fab.module';
import {UiModule} from '../shared/ui/ui.module';
import {LayoutsModule} from '../shared/layouts/layouts.module';
import {QuestionnaireSelectComponent} from './questionnaire-select/questionnaire-select.component';
import {TagQuestionnaireFilterStore} from '../stores/tag-questionnaire-filter-store-s.service';


@NgModule({
  imports: [
    AngularModule,
    CommonModule,
    CovalentModule,
    MaterialModule,
    UserModule,
    TagModule,
    FabModule,
    LayoutsModule,
    NavigationModule,
    SharedModule,
    UiModule,
  ],
  declarations: [QuestionListComponent, QuestionDialogComponent, QuestionDetailComponent, QuestionAppComponent, QuestionSearchComponent,
    QuestionToolBarComponent, QuestionNavListComponent, QuestionFilterComponent, QuestionFormComponent, QuestionnaireSelectComponent],
  entryComponents: [QuestionDialogComponent, QuestionLeftSideNavComponent],
  exports: [QuestionListComponent],
  providers :[TagQuestionnaireFilterStore]
})
export class QuestionModule {
}
