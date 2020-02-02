import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UserStore} from '@app/features/stores/user-store.service';
import {UserResolver} from '@app/features/user/resolvers/user-resolver.service';
import {UserEditComponent} from '@app/features/user/user-edit/user-edit.component';
import {AngularModule} from '@app/shared/angular/angular.module';
import {MaterialModule} from '@app/shared/material/material.module';
import {UserMenuItemComponent} from './user-menu-item/user-menu-item.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AngularModule,
    FlexLayoutModule,
  ],
  exports: [
    UserMenuItemComponent, UserEditComponent
  ],
  declarations: [ UserMenuItemComponent, UserEditComponent],
  providers: [UserResolver, UserStore],
})
export class UserModule {
}
