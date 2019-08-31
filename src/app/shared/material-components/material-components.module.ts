import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';

import {RouterModule} from '@angular/router';
import {CoreModule} from '@app/core/core.module';
import {FabButtonComponent} from '@app/shared/material-components/fab/fab-button/fab-button.component';
import {FabMenuComponent} from '@app/shared/material-components/fab/fab-menu/fab-menu.component';
import {FabToggleComponent} from '@app/shared/material-components/fab/fab-toggle/fab-toggle.component';
import {FabModule} from '@app/shared/material-components/fab/fab.module';
import {LoginMenuComponent} from '@app/shared/material-components/login-menu/login-menu.component';
import {SelectableListComponent} from '@app/shared/material-components/selectable-list/selectable-list.component';
import {SideNavLayoutComponent} from '@app/shared/material-components/side-nav-layout/sidenav-layout.component';
import {MaterialModule} from '@app/shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FabModule,
    CoreModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [SelectableListComponent, SideNavLayoutComponent, LoginMenuComponent]
  , exports: [SelectableListComponent, SideNavLayoutComponent, LoginMenuComponent,
    FabMenuComponent, FabToggleComponent, FabButtonComponent]
})
export class MaterialComponentsModule {
}
