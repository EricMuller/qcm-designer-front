import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideNavLayoutComponent} from './side-nav-layout/sidenav-layout.component';
import {CovalentModule} from '../../../shared/covalent/covalent.module';
import {LoginMenuComponent} from './login-menu/login-menu.component';
import {FabModule} from '../../navigation/fab/fab.module';


@NgModule({
  imports: [CommonModule, CovalentModule, FabModule],
  exports: [SideNavLayoutComponent, LoginMenuComponent],
  declarations: [SideNavLayoutComponent, LoginMenuComponent]
})
export class LayoutsModule {
}
