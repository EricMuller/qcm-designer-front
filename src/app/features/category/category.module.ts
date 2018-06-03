import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AngularModule} from '../../shared/angular/angular.module';
import {LayoutsModule} from '../../shared/layouts/layouts.module';
import {MaterialModule} from '../../shared/material/material.module';
import {CategoryDetailContentComponent} from './category-detail-content/category-detail-content.component';
import {CategoryDialogComponent} from './category-dialog/category-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AngularModule,
    MaterialModule,
    LayoutsModule,
  ],
  exports: [CategoryDetailContentComponent],
  declarations: [CategoryDialogComponent, CategoryDetailContentComponent]
})
export class CategoryModule {
}
