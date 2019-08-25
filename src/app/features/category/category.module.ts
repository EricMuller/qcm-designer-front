import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AngularModule} from '@app/shared/angular/angular.module';
import {MaterialComponentsModule} from '@app/shared/material-components/material-components.module';
import {MaterialModule} from '@app/shared/material/material.module';


import {CategoryDetailContentComponent} from './category-detail-content/category-detail-content.component';
import {CategoryDialogComponent} from './category-dialog/category-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AngularModule,
    MaterialModule,
    MaterialComponentsModule,
  ],
  exports: [CategoryDetailContentComponent],
  declarations: [CategoryDialogComponent, CategoryDetailContentComponent]
})
export class CategoryModule {
}
