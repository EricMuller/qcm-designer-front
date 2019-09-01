import {Component, Input, OnInit} from '@angular/core';
import {Tag} from '@app/features/qcm-rest-api/model/tag.model';
import {TagStore} from '@app/features/stores/tag-store.service';



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
