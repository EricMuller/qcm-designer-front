import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-question-app',
  templateUrl: './question-app.component.html',
  styleUrls: ['./question-app.component.scss']
})
export class QuestionAppComponent implements OnInit {

  env = environment;

  constructor() { }

  ngOnInit() {
  }

}
