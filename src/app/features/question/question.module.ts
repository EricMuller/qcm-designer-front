import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionListComponent} from './question-list/question-list.component';
import {CovalentModule} from '../../shared/covalent/covalent.module';
import {LayoutsModule} from '../../shared/layouts/layouts.module';
import {AngularModule} from '../../shared/angular/angular.module';
import {QuestionDialogComponent} from './question-dialog/question-dialog.component';
import {QuestionDetailComponent} from './question-detail/question-detail.component';
import {QuestionAppComponent} from './question-app/question-app.component';
import {QuestionSearchComponent} from './question-search/question-search.component';
import {QuestionToolBarComponent} from './question-tool-bar/question-tool-bar.component';
import {QuestionLeftSideNavComponent} from './question-left-side-nav/question-left-side-nav.component';
import {UserModule} from '../user/user.module';

@NgModule({
  imports: [
    CommonModule,
    CovalentModule,
    AngularModule,
    LayoutsModule,
    UserModule
  ],
  exports: [QuestionListComponent],
  declarations: [QuestionListComponent, QuestionDialogComponent, QuestionDetailComponent, QuestionAppComponent, QuestionSearchComponent, QuestionToolBarComponent, QuestionLeftSideNavComponent],
  entryComponents: [QuestionDialogComponent]
})
export class QuestionModule {
}
