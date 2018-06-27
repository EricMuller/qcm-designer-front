import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Questionnaire} from '../../../api/qcm/model/questionnaire.model';


@Component({
  selector: 'app-questionnaire-detail',
  templateUrl: './questionnaire-detail.component.html',
  styleUrls: ['./questionnaire-detail.component.css']
})
export class QuestionnaireDetailComponent implements OnInit {

  public questionnaire: Questionnaire;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.questionnaire = data.questionnaire;
      // this.questions = data.questions.content;
    });
  }

  ngOnInit(): void {

  }

}
