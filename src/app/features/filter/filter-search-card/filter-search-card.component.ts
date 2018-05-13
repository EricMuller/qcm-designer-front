import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TdPulseAnimation} from '@covalent/core';
import {TagSelectionStore} from '../../tag/services/tag-selection-store';
import {TagDataSource} from '../services/tag-data-source.service';


@Component({
  selector: 'app-filter-search-card',
  templateUrl: './filter-search-card.component.html',
  styleUrls: ['./filter-search-card.component.scss'],
  animations: [
    TdPulseAnimation(),
  ], providers: [TagDataSource, TagSelectionStore]
})
export class FilterSearchCardComponent implements OnInit {


  @Output('onClosed')
  private onClosed = new EventEmitter<boolean>();

  constructor(
    public tagDataSource: TagDataSource,
    public tagSelectionStore: TagSelectionStore) {
  }

  ngOnInit() {
  }

  public closeCard() {
    this.onClosed.emit(true);
  }

}
