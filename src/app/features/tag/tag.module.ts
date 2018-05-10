import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagSelectionService} from './services/tag-selection.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [TagSelectionService]
})
export class TagModule {
}
