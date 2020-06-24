import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionFormComponent} from '@app/features/question/question-form/question-form.component';
import {QuestionListComponent} from '@app/features/question/question-list/question-list.component';
import {QuestionModule} from '@app/features/question/question.module';
import {QuestionCategoryResolver} from '@app/features/question/resolvers/category-resolver.service';
import {QuestionResolver} from '@app/features/question/resolvers/question-resolver.service';
import {AppGuard} from '@app/shared/auth/app-guard.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  },
  {path: 'list', component: QuestionListComponent, canActivate: [AppGuard]},
  {
    path: ':uuid', component: QuestionFormComponent, canActivate: [AppGuard],
    resolve: {
      question: QuestionResolver,
      categories: QuestionCategoryResolver
    }
  }
];

@NgModule({
  imports: [QuestionModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [QuestionResolver, QuestionCategoryResolver]
})
export class QuestionRoutingModule {

}
