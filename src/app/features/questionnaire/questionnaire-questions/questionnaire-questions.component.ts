import {Component, Input, OnInit} from '@angular/core';
import {Question} from '@app/features/qcm-rest-api/model/question.model';
import {QuestionListStore} from '@app/features/stores/question-list-store.service';



@Component({
  selector: 'app-questionnaire-questions',
  templateUrl: './questionnaire-questions.component.html',
  styleUrls: ['./questionnaire-questions.component.scss']
})
export class QuestionnaireQuestionsComponent implements OnInit {

  @Input()
  public questions: Question[];
  public selected: Question[];
  constructor( protected questionStore: QuestionListStore) {
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
