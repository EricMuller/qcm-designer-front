import {Component, OnInit} from '@angular/core';
import {TdPulseAnimation} from '@covalent/core';
import {QuestionnaireStore} from '../stores/questionnaire-store.service';
import {TagStore} from '../../tag/stores/tag-store.service';


@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.css'],
  animations: [
    TdPulseAnimation(),
  ]
})
export class QuestionnaireListComponent implements OnInit {

  constructor(public questionnaireStore: QuestionnaireStore, public tagStore: TagStore) {
  }

  ngOnInit() {
  }


}
