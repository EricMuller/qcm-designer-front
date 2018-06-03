import {Component, OnInit} from '@angular/core';
import {TdPulseAnimation} from '@covalent/core';
import {TagStore} from '../../tag/stores/tag-store.service';
import {QuestionStore} from '../stores/question-store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
  animations: [
    TdPulseAnimation(),
  ]
})
export class QuestionListComponent implements OnInit {


  constructor(public questionStore: QuestionStore, public tagStore: TagStore, private router: Router) {
  }

  ngOnInit() {

  }

  public create() {
    this.router.navigate(['/questions/0']);
  }
}
