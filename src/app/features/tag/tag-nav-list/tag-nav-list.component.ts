import {Component, Input, OnInit} from '@angular/core';
import {TagStore} from '../../stores/tag-store.service';
import {Tag} from '@api/qcm/model/tag.model';


@Component({
  selector: 'app-tag-nav-list',
  templateUrl: './tag-nav-list.component.html',
  styleUrls: ['./tag-nav-list.component.scss']
})
export class TagNavListComponent implements OnInit {

  @Input()
  public elements: Tag[];


  constructor(private tagStore: TagStore) {
  }

  ngOnInit() {
  }

  public isSelected(tag: Tag):
    boolean {
    return this.tagStore.isSelected(tag);
  }

  public setClickedRow = function (tag: Tag) {
    this.filterStore.swapElement(tag);
  }

}
