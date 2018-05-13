import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterSearchCardComponent} from './filter-search-card/filter-search-card.component';
import {MaterialModule} from '../../shared/material/material.module';
import {EmuModule} from '../../shared/emu/emu.module';
import {DefaultSelectionListStore} from '../../shared/emu/components/data-source-selectable-list/data-selectable-list/default-list-selection-store.service';
import {TagNavListComponent} from './filter-search-card/tag-nav-list/tag-nav-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    EmuModule
  ],
  exports: [FilterSearchCardComponent],
  declarations: [FilterSearchCardComponent, TagNavListComponent],
  providers: [DefaultSelectionListStore]
})
export class FilterModule {
}
