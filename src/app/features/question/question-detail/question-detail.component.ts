import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../../api';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  @Input()
  public question: Question;

  constructor() { }

  ngOnInit() {
  }



}
