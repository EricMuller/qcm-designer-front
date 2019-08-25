import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Question} from '@app/shared/qcm-rest-api/model/question.model';
import {Tag} from '@app/shared/qcm-rest-api/model/tag.model';
import {QuestionStore} from '@app/shared/stores/question-store.service';
import {TagStore} from '@app/shared/stores/tag-store.service';


@Component({
  selector: 'app-question-nav-list',
  templateUrl: './question-nav-list.component.html',
  styleUrls: ['./question-nav-list.component.scss']
})
export class QuestionNavListComponent implements OnInit {

  @Input()
  public elements: Question[];

  constructor(private questionStore: QuestionStore,
              private tagStore: TagStore, private router: Router) {
  }

  ngOnInit() {
  }

  public isSelected(question: Question):
    boolean {
    return this.questionStore.isSelected(question);
  }

  public swapTag(tag: Tag) {
    this.tagStore.swapElement(tag);
  }

  public setClickedRow = function (question: Question) {
    this.questionStore.swapElement(question);
  }

  public create() {
    this.router.navigate(['/questions/0']);
  }
}
