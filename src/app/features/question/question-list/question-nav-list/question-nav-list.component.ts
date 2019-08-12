import {Component, Input, OnInit} from '@angular/core';

import {QuestionStore} from '../../../stores/question-store.service';
import {Router} from '@angular/router';
import {TagStore} from '../../../stores/tag-store.service';
import {Question} from '@api/qcm/model/question.model';
import {Tag} from '@api/qcm/model/tag.model';


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