import {Component, OnInit} from '@angular/core';
import {NotifierService} from '../../../core/simple-notifier.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';


import {Observable} from 'rxjs/Observable';

import {SearchStore} from '../../questionnaire/services/questionnaire-search-store.service';
import {Questionnaire} from '@api/qcm/model/questionnaire.model';
import {Question} from '@api/qcm/model/question.model';
import {QuestionService} from '@api/qcm/services/question.service';

@Component({
  selector: 'app-question-search',
  templateUrl: './question-search.component.html',
  styleUrls: ['./question-search.component.scss']
})
export class QuestionSearchComponent implements OnInit {

  public questionnaires: Questionnaire[] = [];

  public _questions: Question[] = [];

  public selectedValue: Number;

  constructor(private questionService: QuestionService,
              private dialog: MatDialog,
              private notifierService: NotifierService,
              private route: ActivatedRoute,
              public questionnaireStore: SearchStore) {
    this.route.data.subscribe(data => {
      this.questionnaires = data.questionnaires.content;
      // this.getQuestionsByQuestionnaireId(this.questionnaire.id);
      // this.route.queryParams.subscribe(params => {
      //   this.selectedValue = params['questionnaireId'];
      //   // this.getQuestionsByQuestionnaireId(this.questionnaire.id);
      // });
      if (questionnaireStore.selected) {
        this.selectedValue = questionnaireStore.selected;
      }
    });
  }

  ngOnInit() {
  }

  public search() {

    this.questionService.getPageQuestionsByQuestionnaireId(this.selectedValue).subscribe(
      (page) => {
        this._questions = page.content;
      }
    );
  }
  get questions(): Observable<Question[]> {
    return Observable.of(this._questions);
  }

}
