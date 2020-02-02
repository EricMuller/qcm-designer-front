import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserResolver} from '@app/features/user/resolvers/user-resolver.service';
import {UserEditComponent} from '@app/features/user/user-edit/user-edit.component';

import {UserModule} from '@app/features/user/user.module';

const routes: Routes = [
 {
    path: 'edit', component: UserEditComponent,
    resolve: {
      user: UserResolver,
    }
  },
];

@NgModule({
  imports: [UserModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
