import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '@app/shared/material/material.module';
import {SettingsEditComponent} from './settings-edit/settings-edit.component';


@NgModule({
  declarations: [SettingsEditComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [SettingsEditComponent],
})
export class SettingsModule {
}
