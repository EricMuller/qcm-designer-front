import {Component, OnInit} from '@angular/core';
import {TdPulseAnimation} from '@covalent/core';
import {QuestionStore} from '../../stores/question-store.service';
import {Router} from '@angular/router';

import {QuestionnaireStore} from '../../stores/questionnaire-store.service';
import {NotifierService} from '../../../core/simple-notifier.service';
import {TagQuestionnaireFilterStore} from '../../stores/tag-questionnaire-filter-store-s.service';
import {Questionnaire} from '@api/qcm/model/questionnaire.model';
import {Question} from '@api/qcm/model/question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
  animations: [
    TdPulseAnimation(),
  ]
})
export class QuestionListComponent implements OnInit {

  public questionnaires: Questionnaire[];
  public selected: Question[];

  public filter = false;


  constructor(public questionStore: QuestionStore,
              public filterStore: TagQuestionnaireFilterStore,
              private router: Router,
              private  notifier: NotifierService,
              private questionnaireStore: QuestionnaireStore) {
  }

  ngOnInit() {
    this.questionnaireStore.selected$.subscribe((qs) => this.questionnaires = qs);
    this.questionStore.selected$.subscribe(selected => {
      this.selected = selected;
    })
  }

  public removeSelectedQuestionnaire(q: Questionnaire) {
    this.questionnaireStore.selectElement(q, false);
  }

  public create() {
    this.router.navigate(['/questions/0']);
  }

  public add(questionnaire: Questionnaire) {
    for (const question of this.selected) {
      this.questionnaireStore.addQuestion(questionnaire, question).subscribe((q) => this.notifier.notifySuccess(q.title + ' Saved!'));
    }
  }

  get currentQuestionnaire(): Questionnaire {
    if (this.questionnaires && this.questionnaires.length === 1) {
      return this.questionnaires[0];
    } else {
      return null;
    }

  }

}
