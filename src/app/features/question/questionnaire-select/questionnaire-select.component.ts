import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Letter} from '../../questionnaire/questionnaire-filter/Letter';
import {MatChip} from '@angular/material';
import {Filter} from '../../shared/ui/filter/filter';
import {QuestionnaireStore} from '../../stores/questionnaire-store.service';
import {Questionnaire} from '../../../api/qcm/model/questionnaire.model';

@Component({
  selector: 'app-questionnaire-select',
  templateUrl: './questionnaire-select.component.html',
  styleUrls: ['./questionnaire-select.component.scss']
})
export class QuestionnaireSelectComponent implements OnInit {

  public selected: Questionnaire[];
  public questionnaires: Questionnaire[];
  public letters: Array<Letter> = [];

  public selectedChips: MatChip[];

  public removable = true;
  public selectable = true;
  public letter;

  @Output('onSelected')
  private onSelected = new EventEmitter<Questionnaire[]>();


  constructor(private questionnaireStore: QuestionnaireStore) {

    this.questionnaireStore.selected$.subscribe((selected) => {
      this.selected = selected;
      this.onSelected.emit(selected);
    });

    this.questionnaireStore.page$.subscribe((page) => {
      this.questionnaires = page.content;
      if (this.letters.length === 0) {
        this.buildLetters();
      }
    });

    this.questionnaireStore.getPage(0, 100, 'title');
  }

  ngOnInit() {
  }

  private buildLetters() {
    const letters: Array<string> = [];
    this.letters = [];
    for (let j = 0; this.questionnaires.length > j; j++) {
      letters.push(this.questionnaires[j].title.substring(0, 1).toUpperCase());
    }

    for (const l of Array.from(new Set(letters))) {
      this.letters.push(new Letter(l));
    }
  }

  public isSelectItem(tag: Questionnaire): boolean {
    return this.questionnaireStore.isSelected(tag);
  }

  public unSelectItem(tag: Questionnaire) {
    this.questionnaireStore.selectElement(tag, false);
  }

  public selectItem(tag: Questionnaire) {
    this.questionnaireStore.selectElement(tag, true);
  }

  public selectLetter(letter) {
    const filters: Filter[] = [new Filter(letter, 'firstLetter')];

    this.questionnaireStore.getPageByFilters(filters, 0, 100, 'title');
  }

}
