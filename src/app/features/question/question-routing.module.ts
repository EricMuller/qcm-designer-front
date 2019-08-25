import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KeycloakGuardService} from '@app/core/auth/keycloak-guard.service';
import {QuestionFormComponent} from '@app/features/question/question-form/question-form.component';
import {QuestionListComponent} from '@app/features/question/question-list/question-list.component';
import {QuestionModule} from '@app/features/question/question.module';
import {QuestionResolver} from '@app/features/question/resolvers/question-resolver.service';
import {UserDetailComponent} from '@app/features/user/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  },
  {path: 'list', component: QuestionListComponent, canActivate: [KeycloakGuardService]},
  {path: 'user', component: UserDetailComponent},
  {
    path: ':id', component: QuestionFormComponent, canActivate: [KeycloakGuardService],
    resolve: {
      question: QuestionResolver
    }
  }
];

@NgModule({
  imports: [QuestionModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [QuestionResolver]
})
export class QuestionRoutingModule {

}
