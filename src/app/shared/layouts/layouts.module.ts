import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideNavLayoutComponent} from './side-nav-layout/sidenav-layout.component';
import {CovalentModule} from '../covalent/covalent.module';
import {LoginMenuComponent} from './login-menu/login-menu.component';


@NgModule({
  imports: [CommonModule, CovalentModule],
  exports: [SideNavLayoutComponent, LoginMenuComponent],
  declarations: [SideNavLayoutComponent, LoginMenuComponent]
})
export class LayoutsModule {
}
