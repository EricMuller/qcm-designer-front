import {Component, OnInit} from '@angular/core';
import {TdPulseAnimation} from '@covalent/core';
import {QuestionnaireStore} from '../../stores/questionnaire-store.service';
import {Router} from '@angular/router';
import {TagStore} from '../../stores/tag-store.service';


@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.css'],
  animations: [
    TdPulseAnimation(),
  ]
})
export class QuestionnaireListComponent implements OnInit {

  public filter = false;

  constructor(public questionnaireStore: QuestionnaireStore, public tagStore: TagStore, private router: Router) {
  }

  ngOnInit() {
  }

  public create() {
    this.router.navigate(['/questionnaires/0']);
  }
}
