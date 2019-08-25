import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImportAppComponent} from '@app/features/import/import-app/import-app.component';
import {QuestionnaireImportComponent} from '@app/features/import/questionnaire-import/questionnaire-import.component';
import {KeycloakGuardService} from '@app/core/auth/keycloak-guard.service';
import {ImportModule} from '@app/features/import/import.module';

const routes: Routes = [
  {
    path: '', component: ImportAppComponent,
    children: [
      {
        path: 'questionnaires', component: QuestionnaireImportComponent, canActivate: [KeycloakGuardService],
      }]
  },
];

@NgModule({
  imports: [ImportModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportRoutingModule {

}
