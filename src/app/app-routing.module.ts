import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {QuestionResolver} from './features/question/resolvers/question-resolver.service';
import {QuestionsResolver} from './features/question/resolvers/questions-resolver.service';
import {PageQuestionsByQuestionnaireResolver} from './features/questionnaire/resolvers/page-questions-questionnaire-resolver.service';
import {QuestionsQuestionnaireResolver} from './features/questionnaire/resolvers/questions-questionnaire-resolver.service';

const routes: Routes = [

  {
    path: 'home', component: HomeComponent,
    data: {
      breadcrumb: 'Home'
    }
  },
  {
    path: 'upload', loadChildren: () => import('./features/upload/upload-routing.module').then(m => m.UploadRoutingModule),
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'user', loadChildren: () => import('./features/user/user-routing.module').then(m => m.UserRoutingModule),
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'social', loadChildren: () => import('./features/social/social-routing.module').then(m => m.SocialRoutingModule),
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'questions',
    loadChildren: () => import('./features/question/question-routing.module').then(m => m.QuestionRoutingModule),
    data: {preload: true, breadcrumb: null}
  },
  {
    path: 'questionnaires',
    loadChildren: () => import('./features/questionnaire/questionnaire-routing.module').then(m => m.QuestionnaireRoutingModule),
    data: {preload: true, breadcrumb: null},
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, enableTracing: false, preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  providers: [PageQuestionsByQuestionnaireResolver, QuestionsResolver, QuestionResolver, QuestionsQuestionnaireResolver]
})
export class AppRoutingModule {
}


