import {Component, Input, OnInit} from '@angular/core';
import {Question} from '@app/features/qcm-rest-api/model/question.model';

@Component({
  selector: 'app-question-responses',
  templateUrl: './question-responses.component.html',
  styleUrls: ['./question-responses.component.scss']
})
export class QuestionResponsesComponent implements OnInit {

  @Input()
  private question: Question;

  constructor() {
  }

  ngOnInit() {
  }

  calculResponseHeigth(responseTest: string): number {

    let nb = 0;
    if (responseTest) {
      nb = responseTest.replace(/[^\n]+/g, '').length;
    }

    return nb * 21;
  }


}
