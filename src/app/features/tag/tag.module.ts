import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagStore} from './stores/tag-store.service';
import {TagNavListComponent} from './tag-nav-list/tag-nav-list.component';
import {AngularModule} from '../../shared/angular/angular.module';
import {MaterialModule} from '../../shared/material/material.module';


@NgModule({
  imports: [
    CommonModule, AngularModule, MaterialModule
  ],
  declarations: [TagNavListComponent],
  providers: [TagStore], exports: [TagNavListComponent]
})
export class TagModule {
}
