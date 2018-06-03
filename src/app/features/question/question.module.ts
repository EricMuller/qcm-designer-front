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
import {EmuModule} from '../../shared/emu/emu.module';
import {QuestionNavListComponent} from './question-list/question-nav-list/question-nav-list.component';
import {QuestionStore} from './stores/question-store.service';
import {QuestionFilterComponent} from './search/question-filter/question-filter.component';
import {TagModule} from '../tag/tag.module';
import {MaterialModule} from '../../shared/material/material.module';
import { QuestionFormComponent } from './question-form/question-form.component';


@NgModule({
  imports: [
    AngularModule,
    CommonModule,
    CovalentModule,
    EmuModule,
    LayoutsModule,
    MaterialModule,
    UserModule,
    TagModule
  ],
  exports: [QuestionListComponent],
  declarations: [QuestionListComponent, QuestionDialogComponent, QuestionDetailComponent, QuestionAppComponent, QuestionSearchComponent,
    QuestionToolBarComponent, QuestionLeftSideNavComponent, QuestionNavListComponent, QuestionFilterComponent, QuestionFormComponent],
  entryComponents: [QuestionDialogComponent],
  providers: [QuestionStore]
})
export class QuestionModule {
}
