import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularModule} from '@app/shared/angular/angular.module';
import {MaterialModule} from '@app/shared/material/material.module';
import {TranslateModule} from '@ngx-translate/core';

import {TagNavListComponent} from './tag-nav-list/tag-nav-list.component';
import {TagSelectComponent} from './tag-select/tag-select.component';


@NgModule({
  imports: [
    CommonModule, AngularModule, MaterialModule, FlexLayoutModule, TranslateModule.forChild()
  ],
  declarations: [TagNavListComponent, TagSelectComponent],
  exports: [TagNavListComponent, TagSelectComponent]
})
export class TagModule {

}
