import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {QuestionnaireStore} from '@app/shared/stores/questionnaire-store.service';


@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.css'],
})
export class QuestionnaireListComponent implements OnInit {

  public filter = false;

  constructor(public questionnaireStore: QuestionnaireStore,  private router: Router) {
  }

  ngOnInit() {
  }

  public create() {
    this.router.navigate(['/questionnaires/0']);
  }
}
