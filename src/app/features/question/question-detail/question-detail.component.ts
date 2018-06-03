import {Component} from '@angular/core';
import {Question} from '../../../api';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent {
  public question: Question;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.question = data.question;
    });
  }

}
