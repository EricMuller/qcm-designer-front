import {Questionnaire} from '../../../api/qcm/model/questionnaire.model';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-questionnaire-tool-bar',
  templateUrl: './questionnaire-tool-bar.component.html',
  styleUrls: ['./questionnaire-tool-bar.component.scss']
})

export class QuestionnaireToolBarComponent implements OnInit {

  @Input()
  public questionnaire: Questionnaire;

  constructor() {
  }

  ngOnInit() {
  }

}
