import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TdPulseAnimation} from '@covalent/core';
import {QuestionnaireStore} from '../../stores/questionnaire-store.service';
import {Questionnaire} from '../../../api/model/questionnaire.model';
import {TagStore} from '../../stores/tag-store.service';

@Component({
  selector: 'app-question-filter',
  templateUrl: './question-filter.component.html',
  styleUrls: ['./question-filter.component.scss'],
  animations: [
    TdPulseAnimation(),
  ]
})
export class QuestionFilterComponent implements OnInit {

  public questionnaires: Questionnaire[];


  @Output('onClosed')
  private onClosed = new EventEmitter<boolean>();

  constructor(public tagStore: TagStore, private questionnaireStore: QuestionnaireStore) {
  }

  ngOnInit() {
    this.questionnaireStore.selected$.subscribe((qs) => this.questionnaires = qs);
  }

  public closeCard(event) {
    this.onClosed.emit(event);
  }

  public unSelectQuestionnaire(q: Questionnaire) {
    this.questionnaireStore.selectElement(q, false);
  }

}
