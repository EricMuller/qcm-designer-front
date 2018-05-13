import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterSearchCardComponent} from './filter-search-card/filter-search-card.component';
import {MaterialModule} from '../../shared/material/material.module';
import {EmuModule} from '../../shared/emu/emu.module';
import {TagNavListComponent} from './filter-search-card/tag-nav-list/tag-nav-list.component';
import {TagStore} from '../tag/stores/tag-store.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    EmuModule
  ],
  exports: [FilterSearchCardComponent],
  declarations: [FilterSearchCardComponent, TagNavListComponent],
  providers: [TagStore]
})
export class FilterModule {
}
