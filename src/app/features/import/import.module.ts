import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImportAppComponent} from './import-app/import-app.component';
import {NavigationModule} from '../navigation/navigation.module';
import {MaterialModule} from '../../shared/material/material.module';
import {AngularModule} from '../../shared/angular/angular.module';
import {LayoutsModule} from '../shared/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    AngularModule,
    MaterialModule,
    LayoutsModule
  ],
  declarations: [ImportAppComponent]
})
export class ImportModule {
}
