import { Component, OnInit } from '@angular/core';
import {TdPulseAnimation} from '@covalent/core';

@Component({
  selector: 'app-question-tool-bar',
  templateUrl: './question-tool-bar.component.html',
  styleUrls: ['./question-tool-bar.component.scss'],
  animations: [
    TdPulseAnimation(),
  ]
})
export class QuestionToolBarComponent implements OnInit {

  public totalElements = 0;
  public pulseState = false;

  constructor() { }

  ngOnInit() {
  }

}
