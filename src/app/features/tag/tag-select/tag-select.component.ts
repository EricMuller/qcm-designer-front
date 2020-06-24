import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Criteria} from '@app/features/qcm-rest-api/model/criteria';
import {Tag} from '@app/features/qcm-rest-api/model/tag.model';

import {MatChip} from '@angular/material';
import {Letter} from '@app/features/tag/tag-select/Letter';
import {TagListStore} from '@app/features/stores/tag-list-store.service';

@Component({
  selector: 'app-tag-select',
  templateUrl: './tag-select.component.html',
  styleUrls: ['./tag-select.component.scss']
})
export class TagSelectComponent implements OnInit {
  public selected: Tag[];
  public tags: Tag[];
  public letters: Array<Letter> = [];

  public selectedChips: MatChip[];

  public removable = true;
  public selectable = true;
  public letter;

  @Output('onSelected')
  private onSelected = new EventEmitter<Tag[]>();

  constructor(private tagListStore: TagListStore) {

    this.tagListStore.selected$.subscribe((selected) => {
      this.selected = selected;
      this.onSelected.emit(selected);
    });

    this.tagListStore.page$.subscribe((page) => {
      this.tags = page.content;
      if (this.letters.length === 0) {
        this.buildLetters();
      }
    });

    this.tagListStore.getPage(0, 100, 'libelle');
  }

  ngOnInit() {
  }

  private buildLetters() {
    const letters: Array<string> = [];
    this.letters = [];
    for (let j = 0; this.tags.length > j; j++) {
      letters.push(this.tags[j].libelle.substring(0, 1).toUpperCase());
    }

    for (const l of Array.from(new Set(letters))) {
      this.letters.push(new Letter(l));
    }

  }

  public isSelectItem(tag: Tag): boolean {
    return this.tagListStore.isSelected(tag);
  }

  public unSelectItem(tag: Tag) {
    this.tagListStore.selectElement(tag, false);
  }

  public selectItem(tag: Tag) {
    this.tagListStore.selectElement(tag, true);
  }

  public selectLetter(letter) {
    const criteria: Criteria[] = [new Criteria(letter, 'firstLetter')];

    this.tagListStore.getPageByCriteria(criteria, 0, 100, 'libelle');
  }

}
