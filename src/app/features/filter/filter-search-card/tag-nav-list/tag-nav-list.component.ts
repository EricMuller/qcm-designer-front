import {Component, Input, OnInit} from '@angular/core';
import {Tag} from '../../../../api/model/tag.model';
import {TagStore} from '../../../tag/stores/tag-store.service';


@Component({
  selector: 'app-tag-nav-list',
  templateUrl: './tag-nav-list.component.html',
  styleUrls: ['./tag-nav-list.component.scss']
})
export class TagNavListComponent implements OnInit {

  @Input()
  public elements: Tag[];


  constructor(private tagSelectionStore: TagStore) {
  }

  ngOnInit() {
  }

  public isSelected(tag: Tag):
    boolean {
    return this.tagSelectionStore.isSelected(tag);
  }

  public setClickedRow = function (tag: Tag) {
    this.tagSelectionStore.swapElement(tag);
  }

}
