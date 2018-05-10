import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EpicDialogComponent} from './epic-dialog/epic-dialog.component';
import {EpicDetailContentComponent} from './epic-detail-content/epic-detail-content.component';
import {AngularModule} from '../../shared/angular/angular.module';
import {LayoutsModule} from '../../shared/layouts/layouts.module';
import {MaterialModule} from '../../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    AngularModule,
    MaterialModule,
    LayoutsModule,
  ],
  exports: [EpicDetailContentComponent],
  declarations: [EpicDialogComponent, EpicDetailContentComponent]
})
export class EpicModule {
}
