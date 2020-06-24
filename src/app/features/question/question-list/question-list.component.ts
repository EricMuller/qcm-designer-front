import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {QuestionListStore} from '@app/features/stores/question-list-store.service';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {

  public filter = false;

  constructor(public questionListStore: QuestionListStore,
              private router: Router) {
  }

  ngOnInit() {
  }


  public create() {
    this.router.navigate(['/questions/0']);
  }

}
