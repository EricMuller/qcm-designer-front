import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {QuestionStore} from '@app/features/stores/question-store.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {

  public filter = false;

  constructor(public questionStore: QuestionStore,
              private router: Router) {
  }

  ngOnInit() {
  }


  public create() {
    this.router.navigate(['/questions/0']);
  }

}
