import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideNavLayoutComponent} from './side-nav-layout/sidenav-layout.component';

import {LoginMenuComponent} from './login-menu/login-menu.component';
import {FabModule} from '../../navigation/fab/fab.module';
import {MaterialModule} from '@app/shared/material/material.module';


@NgModule({
  imports: [CommonModule, MaterialModule, FabModule],
  exports: [SideNavLayoutComponent, LoginMenuComponent],
  declarations: [SideNavLayoutComponent, LoginMenuComponent]
})
export class LayoutsModule {
}
