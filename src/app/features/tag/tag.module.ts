import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagSelectionStore} from './services/tag-selection-store';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [TagSelectionStore]
})
export class TagModule {
}
