import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppState} from '@app/app/state/app-state.service';
import {QuestionnaireModel} from '@app/app/state/questionnaire-model';
import {SetCurrentQuestionnaireAction} from '@app/app/state/set-current-questionnaire-action';
import {QuestionnaireQuestionListStore} from '@app/features/stores/questionnaire-question-list-store.service';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs/internal/Observable';


@Component({
  selector: 'app-questionnaire-question-list',
  templateUrl: './questionnaire-question-list.component.html',
  styleUrls: ['./questionnaire-question-list.component.scss'],
})
export class QuestionnaireQuestionListComponent implements OnInit {

  public filter = false;

  @Select(AppState.currentQuestionnaire) public currentQuestionnaire$: Observable<QuestionnaireModel>;

  constructor(public questionListStore: QuestionnaireQuestionListStore,
              private router: Router, private route: ActivatedRoute, private store: Store) {
    this.route.data.subscribe(data => {
      const questionnaire = data.questionnaire;
      this.store.dispatch(new SetCurrentQuestionnaireAction({uuid: questionnaire.uuid, title: questionnaire.title}));
    });
  }

  ngOnInit() {

  }

  public create() {
    this.router.navigate(['/questions/0']);
  }

}
