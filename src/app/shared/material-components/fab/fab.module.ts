import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../../material/material.module';
import {FabButtonComponent} from './fab-button/fab-button.component';
import {FabMenuComponent} from './fab-menu/fab-menu.component';
import {FabToggleComponent} from './fab-toggle/fab-toggle.component';

@NgModule({
  imports: [
    CommonModule, MaterialModule, FlexLayoutModule
  ],
  declarations: [FabMenuComponent, FabToggleComponent, FabButtonComponent]
  , exports: [FabMenuComponent, FabToggleComponent, FabButtonComponent]
})
export class FabModule {
}
