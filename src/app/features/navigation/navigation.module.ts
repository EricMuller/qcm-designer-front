import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionnaireLeftSideNavComponent} from './questionnaire-left-side-nav/questionnaire-left-side-nav.component';
import {AngularModule} from '../../shared/angular/angular.module';
import {LayoutsModule} from '../shared/layouts/layouts.module';
import {CovalentModule} from '../../shared/covalent/covalent.module';
import {StoresModule} from '../stores/stores.module';
import {UserModule} from '../user/user.module';
import {QuestionLeftSideNavComponent} from './question-left-side-nav/question-left-side-nav.component';
import {FabModule} from './fab/fab.module';

@NgModule({
  imports: [
    CommonModule,
    CovalentModule,
    AngularModule,
    LayoutsModule,
    StoresModule,
    UserModule,
    FabModule
  ],
  declarations: [QuestionnaireLeftSideNavComponent, QuestionLeftSideNavComponent],
  exports: [QuestionnaireLeftSideNavComponent, QuestionLeftSideNavComponent]
})
export class NavigationModule {
}
