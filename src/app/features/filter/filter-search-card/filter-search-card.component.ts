import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TdPulseAnimation} from '@covalent/core';
import {TagStore} from '../../tag/stores/tag-store.service';


@Component({
  selector: 'app-filter-search-card',
  templateUrl: './filter-search-card.component.html',
  styleUrls: ['./filter-search-card.component.scss'],
  animations: [
    TdPulseAnimation(),
  ]
})
export class FilterSearchCardComponent implements OnInit {


  @Output('onClosed')
  private onClosed = new EventEmitter<boolean>();

  constructor(public tagStore: TagStore) {
  }

  ngOnInit() {
  }

  public closeCard(event) {
    this.onClosed.emit(event);
  }

}
