import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KeycloakGuardService} from '@app/core/auth/keycloak-guard.service';
import {UploadListComponent} from '@app/features/upload/upload-list/upload-list.component';
import {UploadModule} from '@app/features/upload/upload.module';

const routes: Routes = [
  {
    path: '', component: UploadListComponent, canActivate: [KeycloakGuardService]
   },
];

@NgModule({
  imports: [UploadModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadRoutingModule {

}
