import {Component, Input, OnInit} from '@angular/core';
import {Questionnaire} from '@app/features/qcm-rest-api/model/questionnaire.model';
import {QuestionnaireStore} from '@app/features/stores/questionnaire-store.service';
import {Observable} from 'rxjs/internal/Observable';


@Component({
  selector: 'app-questionnaire-nav-list',
  templateUrl: './questionnaire-nav-list.component.html',
  styleUrls: ['./questionnaire-nav-list.component.scss']
})
export class QuestionnaireNavListComponent implements OnInit {

  @Input()
  public elements$: Observable<Questionnaire[]>;

  constructor(private questionnaireStore: QuestionnaireStore,
              private tagStore: QuestionnaireStore) {
  }

  ngOnInit() {
  }

  public isSelected(questionnaire: Questionnaire):
    boolean {
    return this.questionnaireStore.isSelected(questionnaire);
  }

  public swapTag(tag: Questionnaire) {
    console.log(tag);
    this.tagStore.swapElement(tag);
  }

  public setClickedRow = function(questionnaire: Questionnaire) {
      this.questionnaireStore.swapElement(questionnaire);
   };
}
