import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {QuestionnaireQuestionListComponent} from './features/questionnaire/question-list/question-list.component';
import {QuestionnaireDetailComponent} from './features/questionnaire/questionnaire-detail/questionnaire-detail.component';
import {UserGuardService} from './core/user-guard.service';
import {QuestionnaireImportComponent} from './features/questionnaire/questionnaire-import/questionnaire-import.component';
import {QuestionnaireAppComponent} from './features/questionnaire/questionnaire-app/questionnaire-app.component';
import {QuestionnaireResolver} from './features/questionnaire/resolvers/questionnaire-resolver.service';
import {QuestionnairesResolver} from './features/questionnaire/resolvers/questionnaires-resolver.service';
import {QuestionnaireIndexComponent} from './features/questionnaire/questionnaire-index/questionnaire-index.component';
import {PageQuestionsByQuestionnaireResolver} from './features/questionnaire/resolvers/page-questions-questionnaire-resolver.service';
import {QuestionListComponent} from './features/question/question-list/question-list.component';
import {HomeComponent} from './home/home.component';
import {QuestionsResolver} from './features/question/resolvers/questions-resolver.service';
import {QuestionsQuestionnaireResolver} from './features/questionnaire/resolvers/questions-questionnaire-resolver.service';
import {QuestionSearchComponent} from './features/question/question-search/question-search.component';
import {UserDetailComponent} from './features/user/user-detail/user-detail.component';
import {QuestionnaireListComponent} from './features/questionnaire/questionnaire-list/questionnaire-list.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'questionnaires',
      pathMatch: 'full'
    },
    {
      path: 'user',
      component: UserDetailComponent,
    },
    {
      path: 'questionnaires', component: QuestionnaireAppComponent,
      children: [
        {
          path: 'user',
          component: UserDetailComponent,
        },
        {
          path: 'list', component: QuestionnaireListComponent, canActivate: [UserGuardService],
          resolve: {
            page: QuestionnairesResolver,
          }
        },
        {
          path: ':id/questions', component: QuestionnaireQuestionListComponent, canActivate: [UserGuardService],
          resolve: {
            questionnaire: QuestionnaireResolver,
            questions: QuestionsQuestionnaireResolver
          }
        },
        {
          path: 'import', component: QuestionnaireImportComponent, canActivate: [UserGuardService],
        },
        {
          path: ':id', component: QuestionnaireDetailComponent, canActivate: [UserGuardService],
          resolve: {
            questionnaire: QuestionnaireResolver
          }
        },

        {
          path: '**', component: QuestionnaireIndexComponent
        },
      ]
    },
    {
      path: 'home', component: HomeComponent,
    },
    {
      path: 'questions', component: QuestionnaireAppComponent, canActivate: [UserGuardService],
      children:
        [
          {
            path: 'user',
            component: UserDetailComponent,
          },
          {
            path: 'list', component: QuestionListComponent, canActivate: [UserGuardService],
            resolve: {
              questions: QuestionsResolver
            }
          },
          {path: 'import', component: QuestionnaireImportComponent, canActivate: [UserGuardService]},
          {
            path: 'search', component: QuestionSearchComponent, canActivate: [UserGuardService],
            resolve: {
              questionnaires: QuestionnairesResolver,
            }
          },
          {path: '**', redirectTo: 'search', pathMatch: 'full'}
        ]
    }

// {path: '', loadChildren: './users/users.module#UsersModule'},
  ]
;


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, enableTracing: false})
  ],
  exports: [
    RouterModule
  ],
  providers: [QuestionnaireResolver, QuestionnairesResolver, PageQuestionsByQuestionnaireResolver, QuestionsResolver
    , QuestionsQuestionnaireResolver]
})
export class AppRoutingModule {
}


