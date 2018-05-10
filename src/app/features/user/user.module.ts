import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {AngularModule} from '../../shared/angular/angular.module';
import {CovalentModule} from '../../shared/covalent/covalent.module';
import {UserMenuItemComponent} from './user-menu-item/user-menu-item.component';

@NgModule({
  imports: [
    CommonModule,
    CovalentModule,
    AngularModule,
  ],
  exports: [
    UserMenuItemComponent
  ],
  declarations: [UserDetailComponent, UserMenuItemComponent]
})
export class UserModule {
}
