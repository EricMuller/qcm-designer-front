import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutsModule} from './layouts/layouts.module';
import {FormsModule} from './forms/forms.module';
import {UiModule} from './ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule,
    FormsModule,
    UiModule
  ],
  declarations: []
})
export class SharedModule {
}
