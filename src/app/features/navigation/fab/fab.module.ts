import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FabMenuComponent} from './fab-menu/fab-menu.component';
import {FabToggleComponent} from './fab-toggle/fab-toggle.component';
import {FabButtonComponent} from './fab-button/fab-button.component';
import {MaterialModule} from '../../../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule, MaterialModule
  ],
  declarations: [FabMenuComponent, FabToggleComponent, FabButtonComponent]
  , exports: [FabMenuComponent, FabToggleComponent, FabButtonComponent]
})
export class FabModule {
}
