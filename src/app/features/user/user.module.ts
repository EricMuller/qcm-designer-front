import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {AngularModule} from '../../shared/angular/angular.module';

import {UserMenuItemComponent} from './user-menu-item/user-menu-item.component';
import {MaterialModule} from '@app/shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AngularModule,
  ],
  exports: [
    UserMenuItemComponent
  ],
  declarations: [UserDetailComponent, UserMenuItemComponent]
})
export class UserModule {
}
