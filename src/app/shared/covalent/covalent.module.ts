import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CovalentStepsModule} from '@covalent/core/steps';
import {CovalentMenuModule} from '@covalent/core/menu';
import {CovalentCommonModule} from '@covalent/core/common';
import {CovalentDialogsModule} from '@covalent/core/dialogs';
import {CovalentChipsModule, CovalentFileModule, CovalentMessageModule, CovalentVirtualScrollModule} from '@covalent/core';
import {CovalentLoadingModule} from '@covalent/core/loading';
import {CovalentSearchModule} from '@covalent/core/search';
import {CovalentPagingModule} from '@covalent/core/paging';
import {CovalentNotificationsModule} from '@covalent/core/notifications';
import {CovalentMediaModule} from '@covalent/core/media';
import {CovalentLayoutModule} from '@covalent/core/layout';
import {CovalentDataTableModule} from '@covalent/core/data-table';
import {MaterialModule} from '../material/material.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CovalentChipsModule,
    CovalentDataTableModule, CovalentMediaModule,
    CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
    CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
    CovalentCommonModule, CovalentDialogsModule,
    CovalentFileModule, CovalentLoadingModule, CovalentVirtualScrollModule,
    CovalentMessageModule
  ], exports: [
    MaterialModule, CovalentChipsModule,
    CovalentDataTableModule, CovalentMediaModule,
    CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
    CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
    CovalentCommonModule, CovalentDialogsModule, CovalentFileModule,
    CovalentLoadingModule, CovalentVirtualScrollModule, CovalentMessageModule]
})
export class CovalentModule {
}
