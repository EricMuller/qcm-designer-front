import {Component, Input, OnInit} from '@angular/core';
import {QuestionStore} from '../../stores/question-store.service';
import {Question} from '@api/qcm/model/question.model';

@Component({
  selector: 'app-questionnaire-questions',
  templateUrl: './questionnaire-questions.component.html',
  styleUrls: ['./questionnaire-questions.component.scss']
})
export class QuestionnaireQuestionsComponent implements OnInit {

  @Input()
  public questions: Question[];
  public selected: Question[];
  constructor( protected questionStore: QuestionStore) {
    this.questionStore.selected$.subscribe((questions) => {
      this.selected = questions;
    });
  }

  ngOnInit() {
  }

  public nbSelectedQuestion(): number {
    return this.questionStore.selectedSize();
  }
}
