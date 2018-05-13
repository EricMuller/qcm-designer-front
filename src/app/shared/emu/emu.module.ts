import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {FabToggleComponent} from './components/fab/fab-toggle/fab-toggle.component';
import {FabMenuComponent} from './components/fab/fab-menu.component';
import {FabButtonComponent} from './components/fab/fab-button/fab-button.component';
import {SelectableListComponent} from './components/data-source-selectable-list/selectable-list.component';
import {AngularModule} from '../angular/angular.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AngularModule
  ],
  exports: [FabMenuComponent, FabToggleComponent, FabButtonComponent, SelectableListComponent],
  declarations: [FabMenuComponent, FabToggleComponent, FabButtonComponent, SelectableListComponent]
})
export class EmuModule {
}
