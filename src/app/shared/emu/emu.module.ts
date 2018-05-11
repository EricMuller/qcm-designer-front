import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {FabToggleComponent} from './components/fab/fab-toggle/fab-toggle.component';
import {FabMenuComponent} from './components/fab/fab-menu.component';
import {FabButtonComponent} from './components/fab/fab-button/fab-button.component';
import { DataSelectableListComponent } from './components/data-selectable-list/data-selectable-list.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [FabMenuComponent, FabToggleComponent, FabButtonComponent],
  declarations: [FabMenuComponent, FabToggleComponent, FabButtonComponent, DataSelectableListComponent]
})
export class EmuModule {
}
