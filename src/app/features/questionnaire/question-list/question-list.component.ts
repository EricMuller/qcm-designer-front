import {Component, OnInit, ViewChild} from '@angular/core';
import {Question} from '@app/features/qcm-rest-api/model/question.model';
import {Questionnaire} from '@app/features/qcm-rest-api/model/questionnaire.model';
import {Page} from '@app/features/qcm-rest-api/services/page';
import {QuestionService} from '@app/features/qcm-rest-api/services/question.service';

import {NotifierService} from '../../../core/notifications/simple-notifier.service';
import {Observable, of} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogConfig, MatPaginator, MatSidenav, MatSort} from '@angular/material';
import {QuestionnaireDialogComponent} from '../questionnaire-dialog/questionnaire-dialog.component';

import {QuestionDialogComponent} from '../../question/question-dialog/question-dialog.component';



@Component({
  selector: 'app-question',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionnaireQuestionListComponent implements OnInit {
  public title = ' Questions JAVA !';
  public number = 0;
  public question: Question;
  public _questions: Question[] = [];


  public results: Observable<Question[]>;
  public questionnaire: Questionnaire;

  public resultsLength = 0;
  public pageIndex = 0;
  public totalElements = 0;
  public last = false;
  public numberOfElements = 0;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild('sidenavright', {static: false}) private sidenavright: MatSidenav;

  constructor(private questionService: QuestionService,
              private dialog: MatDialog,
              private notifierService: NotifierService,
              private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.questionnaire = data.questionnaire;
      this._questions = data.questions;
      // this.getQuestionsByQuestionnaireId(this.questionnaire.id);
    });
  }

  ngOnInit() {
    // this.sub = this.route.params.subscribe(params => {
    //   const id = +params['id']; // (+) converts string 'id' to a number
    //   this.getQuestionsByQuestionnaireId(id);
    // });
  }

  get questions(): Observable<Question[]> {
    return of(this._questions);
  }

  //
  // private getQuestionsByQuestionnaireId(questionnaireId: Number) {
  //   console.log(questionnaireId);
  //   this.questionService.getQuestionsByQuestionnaireId(questionnaireId).subscribe(
  //     (data) => {
  //       this._questions = data;
  //     }
  //   );
  // }


  public editQuestionnaire(questionnaire: Questionnaire) {
    const config = new MatDialogConfig();
    config.data = {questionnaire: questionnaire}
    const dialogRef = this.dialog.open(QuestionnaireDialogComponent, config);
    dialogRef.afterClosed().subscribe(q => {
      if (q) {
        this.questionnaire = q;
      }
    });
  }

  public createQuestion() {

  }

  public openQuestionDialog(question?: Question) {
    const config = new MatDialogConfig();
    config.data = {
      questionnaire: this.questionnaire,
      question: question
    };

    const dialogRef = this.dialog.open(QuestionDialogComponent, config);
    dialogRef.afterClosed().subscribe(q => {
      if (q) {
        const itemIndex = this._questions.findIndex(item => item.id === q.id);
        if (itemIndex === -1) {
          this._questions.push(q);
        } else {
          this._questions[itemIndex] = q;
        }
        this.scrollIntoView('questionId_' + q.id.toString());

      }
    });
  }

  public scrollIntoView(id: string) {
    const el: HTMLElement = document.getElementById(id);
    if (el) {
      el.scrollIntoView()
    }
  }

  public onPaginateChange(event: any) {
    this.questionService.getQuestions(event.pageIndex, 10, 'dateModification').subscribe((page) => {
        this.getPage(page, true);
      }
    );
  }

  private getPage(page: Page, reset?: boolean) {
    this.resultsLength = page.totalElements;
    this.last = page.last;

    if (!reset) {
      this.pageIndex++;
    } else {
      this._questions = [];
      this.pageIndex = 0;
      this.numberOfElements = 0;
    }
    this.numberOfElements += page.numberOfElements;
    this.totalElements = page.totalElements;
    for (const item of page.content) {
      this._questions.push(item);
    }
  }


}
