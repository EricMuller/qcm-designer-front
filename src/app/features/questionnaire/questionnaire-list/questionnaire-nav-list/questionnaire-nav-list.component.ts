import {Component, Input, OnInit} from '@angular/core';
import {QuestionnaireStore} from '../../../stores/questionnaire-store.service';
import {Questionnaire} from '@api/qcm/model/questionnaire.model';


@Component({
  selector: 'app-questionnaire-nav-list',
  templateUrl: './questionnaire-nav-list.component.html',
  styleUrls: ['./questionnaire-nav-list.component.scss']
})
export class QuestionnaireNavListComponent implements OnInit {

  @Input()
  public elements: Questionnaire[];

  constructor(private questionnaireStore: QuestionnaireStore,
              private tagStore: QuestionnaireStore) {
  }

  ngOnInit() {
  }

  public isSelected(questionnaire: Questionnaire):
    boolean {
    return this.questionnaireStore.isSelected(questionnaire);
  }

  public swapTag(tag: Questionnaire) {
    console.log(tag);
    this.tagStore.swapElement(tag);
  }

  public setClickedRow = function (questionnaire: Questionnaire) {
    this.questionnaireStore.swapElement(questionnaire);
  }

}
