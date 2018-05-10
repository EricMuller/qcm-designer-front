import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule
  ], exports: [FormsModule,
    ReactiveFormsModule, BrowserAnimationsModule, RouterModule,
    BrowserModule],
  declarations: []
})
export class AngularModule {
}
