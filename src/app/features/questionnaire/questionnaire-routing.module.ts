import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KeycloakGuardService} from '@app/core/auth/keycloak-guard.service';
import {QuestionnaireQuestionListComponent} from '@app/features/questionnaire/question-list/question-list.component';
import {QuestionnaireFormComponent} from '@app/features/questionnaire/questionnaire-form/questionnaire-form.component';
import {QuestionnaireListComponent} from '@app/features/questionnaire/questionnaire-list/questionnaire-list.component';
import {QuestionnaireModule} from '@app/features/questionnaire/questionnaire.module';
import {QuestionnaireCategoryResolver} from '@app/features/questionnaire/resolvers/category-resolver.service';
import {QuestionnaireResolver} from '@app/features/questionnaire/resolvers/questionnaire-resolver.service';
import {QuestionnairesResolver} from '@app/features/questionnaire/resolvers/questionnaires-resolver.service';
import {QuestionsQuestionnaireResolver} from '@app/features/questionnaire/resolvers/questions-questionnaire-resolver.service';

const routes: Routes = [
  {
    path: 'list', component: QuestionnaireListComponent, canActivate: [KeycloakGuardService],
  },
  {
    path: ':id/questions', component: QuestionnaireQuestionListComponent, canActivate: [KeycloakGuardService],
    resolve: {
      questionnaire: QuestionnaireResolver,
      questions: QuestionsQuestionnaireResolver
    }
  },
  {
    path: ':id', component: QuestionnaireFormComponent, canActivate: [KeycloakGuardService],
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
