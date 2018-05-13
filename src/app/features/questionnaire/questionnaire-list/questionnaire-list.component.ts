import {Component, OnInit} from '@angular/core';
import {TdPulseAnimation} from '@covalent/core';
import {TagSelectionStore} from '../../tag/services/tag-selection-store';
import {QuestionnaireDataSource} from '../services/questionnaire-data-source.service';
import {QuestionnaireSelectionStore} from '../services/questionnaire-selection-store.service';


@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.css'],
  animations: [
    TdPulseAnimation(),
  ]
})
export class QuestionnaireListComponent implements OnInit {

  constructor(
    public selectionStore: QuestionnaireSelectionStore,
    public dataSource: QuestionnaireDataSource,
    public filterStore: TagSelectionStore) {
  }

  ngOnInit() {
  }


}
