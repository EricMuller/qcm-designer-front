import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectableListComponent} from './selectable-list/selectable-list.component';
import {MaterialModule} from '../../../shared/material/material.module';
import {StoresModule} from '../../stores/stores.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoresModule
  ],
  declarations: [SelectableListComponent]
  , exports: [SelectableListComponent]
})
export class UiModule {
}
