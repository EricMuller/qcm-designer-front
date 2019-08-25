import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CoreModule} from '@app/core/core.module';
import {AngularModule} from '@app/shared/angular/angular.module';
import {MaterialModule} from '@app/shared/material/material.module';
import {TagStore} from '@app/shared/stores/tag-store.service';

import {TagNavListComponent} from './tag-nav-list/tag-nav-list.component';
import {TagSelectComponent} from './tag-select/tag-select.component';


@NgModule({
  imports: [
    CommonModule, AngularModule, MaterialModule, CoreModule.forRoot(), FlexLayoutModule
  ],
  declarations: [TagNavListComponent, TagSelectComponent],
  exports: [TagNavListComponent, TagSelectComponent]
})
export class TagModule {

}
