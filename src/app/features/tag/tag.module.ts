import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagNavListComponent} from './tag-nav-list/tag-nav-list.component';
import {AngularModule} from '../../shared/angular/angular.module';
import {MaterialModule} from '../../shared/material/material.module';
import {StoresModule} from '../stores/stores.module';
import {TagSelectComponent} from './tag-select/tag-select.component';
import {TagStore} from '../stores/tag-store.service';



@NgModule({
  imports: [
    CommonModule, AngularModule, MaterialModule, StoresModule
  ],
  declarations: [TagNavListComponent, TagSelectComponent],
  providers: [TagStore], exports: [TagNavListComponent, TagSelectComponent]
})
export class TagModule {

}
