import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PageQuestionsByQuestionnaireResolver} from './features/questionnaire/resolvers/page-questions-questionnaire-resolver.service';
import {HomeComponent} from './features/home/home.component';
import {QuestionsResolver} from './features/question/resolvers/questions-resolver.service';
import {QuestionsQuestionnaireResolver} from './features/questionnaire/resolvers/questions-questionnaire-resolver.service';
import {QuestionResolver} from './features/question/resolvers/question-resolver.service';

const routes: Routes = [

  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'import', loadChildren: () => import('./features/import/import-routing.module').then(m => m.ImportRoutingModule)
  },
  {
    path: 'user', loadChildren: () => import('./features/user/user-routing.module').then(m => m.UserRoutingModule)
  },
  {
    path: 'questions',
    data: {preload: true},
    loadChildren: () => import('./features/question/question-routing.module').then(m => m.QuestionRoutingModule)
  },
  {
    path: 'questionnaires',
    data: {preload: true},
    loadChildren: () => import('./features/questionnaire/questionnaire-routing.module').then(m => m.QuestionnaireRoutingModule)
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


