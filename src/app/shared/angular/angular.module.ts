import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ], exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule],
  declarations: []
})
export class AngularModule {
}
