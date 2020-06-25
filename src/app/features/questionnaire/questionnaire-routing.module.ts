import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionnaireQuestionListComponent} from '@app/features/question/questionnaire-questions-list/questionnaire-question-list.component';
import {QuestionnaireFormComponent} from '@app/features/questionnaire/questionnaire-form/questionnaire-form.component';
import {QuestionnaireListComponent} from '@app/features/questionnaire/questionnaire-list/questionnaire-list.component';
import {QuestionnaireModule} from '@app/features/questionnaire/questionnaire.module';
import {QuestionnaireCategoryResolver} from '@app/features/questionnaire/resolvers/category-resolver.service';
import {QuestionnaireResolver} from '@app/features/questionnaire/resolvers/questionnaire-resolver.service';
import {QuestionnairesResolver} from '@app/features/questionnaire/resolvers/questionnaires-resolver.service';
import {QuestionsQuestionnaireResolver} from '@app/features/questionnaire/resolvers/questions-questionnaire-resolver.service';
import {AppGuard} from '@app/shared/auth/app-guard.service';

const routes: Routes = [
  {
    path: 'list', component: QuestionnaireListComponent, canActivate: [AppGuard],
  },
  {
    path: ':uuid/questions', component: QuestionnaireQuestionListComponent, canActivate: [AppGuard],
    resolve: {
      questionnaire: QuestionnaireResolver,
      // questions: QuestionsQuestionnaireResolver
    }
  },
  {
    path: ':uuid', component: QuestionnaireFormComponent, canActivate: [AppGuard],
    resolve: {
      questionnaire: QuestionnaireResolver,
      categories: QuestionnaireCategoryResolver
    },
  }

];

@NgModule({
  imports: [QuestionnaireModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [QuestionnairesResolver, QuestionnaireResolver, QuestionsQuestionnaireResolver, QuestionnaireCategoryResolver],
})
export class QuestionnaireRoutingModule {
}
