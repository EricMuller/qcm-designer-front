import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tag} from '../../../api/model/tag.model';
import {TdPulseAnimation} from '@covalent/core';
import {TagService} from '../../../api/services/tag.service';

@Component({
  selector: 'app-filter-search-card',
  templateUrl: './filter-search-card.component.html',
  styleUrls: ['./filter-search-card.component.scss'],
  animations: [
    TdPulseAnimation(),
  ]
})
export class FilterSearchCardComponent implements OnInit {

  public showSelectedTags = false;

  public pulseState = false;

  constructor(private tagService: TagService) {

  }

  @Input()
  public tagsSelected: Tag[];

  @Output('onClosed')
  private closed = new EventEmitter<boolean>();

  ngOnInit() {
    console.log('ngOnInit FilterSearchCardComponent');
  }

  public close() {
    this.closed.emit(true);
  }

}
