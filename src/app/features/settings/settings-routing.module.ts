import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WebHookResolver} from '@app/features/settings/resolvers/web-hook-resolver.service';
import {SettingsEditComponent} from '@app/features/settings/settings-edit/settings-edit.component';
import {SettingsModule} from '@app/features/settings/settings.module';

const routes: Routes = [
  {
    path: 'edit', component: SettingsEditComponent,
    resolve: {
      user: WebHookResolver,
    }
  },
  {
    path: '', redirectTo: 'edit', pathMatch: 'full'
  },
];

@NgModule({
  imports: [SettingsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [WebHookResolver]
})
export class SettingsRoutingModule {
}
