import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {FabToggleComponent} from './components/fab/fab-toggle/fab-toggle.component';
import {FabMenuComponent} from './components/fab/fab-menu.component';
import {FabButtonComponent} from './components/fab/fab-button/fab-button.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [FabMenuComponent, FabToggleComponent, FabButtonComponent],
  declarations: [FabMenuComponent, FabToggleComponent, FabButtonComponent]
})
export class EmuModule {
}
