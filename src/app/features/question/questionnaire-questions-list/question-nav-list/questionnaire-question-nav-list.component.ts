import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Question} from '@app/features/qcm-rest-api/model/question.model';
import {Tag} from '@app/features/qcm-rest-api/model/tag.model';
import {QuestionnaireQuestionListStore} from '@app/features/stores/questionnaire-question-list-store.service';

import {TagListStore} from '@app/features/stores/tag-list-store.service';
import {Observable} from 'rxjs/internal/Observable';


@Component({
  selector: 'app-questionnaire-question-nav-list',
  templateUrl: './questionnaire-question-nav-list.component.html',
  styleUrls: ['./questionnaire-question-nav-list.component.scss']
})
export class QuestionnaireQuestionNavListComponent implements OnInit {

  @Input()
  public elements$: Observable<Question[]>;

  constructor(private questionListStore: QuestionnaireQuestionListStore,
              private tagListStore: TagListStore, private router: Router) {
  }

  ngOnInit() {
  }

  public isSelected(question: Question): boolean {
    return this.questionListStore.isSelected(question);
  }

  public swapTag(tag: Tag) {
    this.tagListStore.swapElement(tag);
  }

  public setClickedRow(question: Question) {
    this.questionListStore.swapElement(question);
  }

  public create() {
    this.router.navigate(['/questions/0']);
  }
}
