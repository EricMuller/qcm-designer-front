import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {Router} from '@angular/router';
import {AppState} from '@app/app/state/app-state.service';
import {QuestionnaireModel} from '@app/app/state/questionnaire-model';
import {Question} from '@app/features/qcm-rest-api/model/question.model';
import {QuestionnaireService} from '@app/features/qcm-rest-api/services/questionnaire.service';
import {QuestionDialogComponent} from '@app/features/question/question-dialog/question-dialog.component';
import {QuestionListStore} from '@app/features/stores/question-list-store.service';
import {LayoutDialogModule} from '@app/shared/material-components/layout-module/layout-dialog.module';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs/internal/Observable';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {

  public filter = false;

  @Select(AppState.currentQuestionnaire) public currentQuestionnaire$: Observable<QuestionnaireModel>;

  public uuid: string;
  public selected: Question[];

  constructor(public questionListStore: QuestionListStore,
              private router: Router, private questionnaireService: QuestionnaireService

  ) {

    this.currentQuestionnaire$.subscribe(value => {
      this.uuid = value.uuid;
    });

    questionListStore.selected$.subscribe( value => this.selected = value);
  }

  ngOnInit() {

  }

  public create() {
    this.router.navigate(['/questions/0']);
  }

  public addToQuestionnaire(uuid: string, questions: Question[]) {

    if (uuid) {
      for (const q of questions) {
        this.questionnaireService.putQuestion(uuid, q)
          .subscribe(value => console.log(value));
      }
    }
  }



}
