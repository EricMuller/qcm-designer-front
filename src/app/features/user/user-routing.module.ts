import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailComponent} from '@app/features/user/user-detail/user-detail.component';
import {UserModule} from '@app/features/user/user.module';

const routes: Routes = [
  {
    path: 'user', component: UserDetailComponent,
  },
];

@NgModule({
  imports: [UserModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {

}
