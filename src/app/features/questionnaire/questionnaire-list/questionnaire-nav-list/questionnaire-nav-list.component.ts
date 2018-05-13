import {Component, Input, OnInit} from '@angular/core';
import {Questionnaire} from '../../../../api/model/questionnaire.model';
import {Tag} from '../../../../api/model/tag.model';
import {TagSelectionStore} from '../../../tag/services/tag-selection-store';
import {QuestionnaireSelectionStore} from '../../services/questionnaire-selection-store.service';

@Component({
  selector: 'app-questionnaire-nav-list',
  templateUrl: './questionnaire-nav-list.component.html',
  styleUrls: ['./questionnaire-nav-list.component.scss']
})
export class QuestionnaireNavListComponent implements OnInit {

  @Input()
  public elements: Questionnaire[];

  constructor(private selectionStore: QuestionnaireSelectionStore,
              private tagSelectionStore: TagSelectionStore) {
  }

  ngOnInit() {
  }

  public isSelected(questionnaire: Questionnaire):
    boolean {
    return this.selectionStore.isSelected(questionnaire);
  }

  public swapTag(tag: Tag) {
    console.log(tag);
    this.tagSelectionStore.swapElement(tag);
  }

  public setClickedRow = function (questionnaire: Questionnaire) {
    this.selectionStore.swapElement(questionnaire);
  }

}
