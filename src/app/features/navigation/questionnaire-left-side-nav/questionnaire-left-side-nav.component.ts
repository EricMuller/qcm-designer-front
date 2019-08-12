import {Component, OnDestroy, OnInit} from '@angular/core';

import {QuestionnaireStore} from '../../stores/questionnaire-store.service';
import {Questionnaire} from '@api/qcm/model/questionnaire.model';



@Component({
  selector: 'app-questionnaire-left-side-nav',
  templateUrl: './questionnaire-left-side-nav.component.html',
  styleUrls: ['./questionnaire-left-side-nav.component.scss']
})
export class QuestionnaireLeftSideNavComponent implements OnInit, OnDestroy {


  public questionnairesSelected: Questionnaire[] = [];
  public tagsSelected: Questionnaire[] = [];

  constructor(private questionnaireStore: QuestionnaireStore) {
  }

  ngOnInit() {
    this.questionnaireStore.selected$.subscribe(message => this.questionnairesSelected = message);
  }

  ngOnDestroy(): void {

  }


}
