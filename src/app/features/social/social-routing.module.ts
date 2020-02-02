import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KeycloakGuardService} from '@app/core/auth/keycloak-guard.service';
import {SocialUserResolver} from '@app/features/social/resolvers/user-resolver.service';
import {SocialComponent} from '@app/features/social/social.component';
import {SocialModule} from '@app/features/social/social.module';


export const routes: Routes = [
  {
    path: 'profile',
    component: SocialComponent, canActivate: [KeycloakGuardService],
    resolve: {
      user: SocialUserResolver,
    }
  },
];

@NgModule({
  imports: [SocialModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SocialUserResolver],
})
export class SocialRoutingModule {
}
