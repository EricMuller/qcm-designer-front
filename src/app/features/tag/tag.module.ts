import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagStore} from './stores/tag-store.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [TagStore]
})
export class TagModule {
}
