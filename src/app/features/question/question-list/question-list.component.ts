import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NotifierService} from '@app/core/notifications/simple-notifier.service';
import {Question} from '@app/shared/qcm-rest-api/model/question.model';
import {Questionnaire} from '@app/shared/qcm-rest-api/model/questionnaire.model';
import {QuestionStore} from '@app/shared/stores/question-store.service';
import {QuestionnaireStore} from '@app/shared/stores/questionnaire-store.service';
import {SearchStore} from '@app/shared/stores/tag-questionnaire-filter-store-s.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {

  public questionnaires: Questionnaire[];

  public selected: Question[];

  public filter = false;

  constructor(public questionStore: QuestionStore,
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
      this.questionnaireStore.addQuestion(questionnaire, question)
        .subscribe((q) => this.notifier.notifySuccess(q.title + ' Saved!'));
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
