import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterSearchCardComponent} from './filter-search-card/filter-search-card.component';
import {MaterialModule} from '../../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [FilterSearchCardComponent],
  declarations: [FilterSearchCardComponent]
})
export class FilterModule {
}
