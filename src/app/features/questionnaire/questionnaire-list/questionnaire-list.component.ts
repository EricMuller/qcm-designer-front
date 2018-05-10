import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {QuestionnaireService} from '../../../api/services/questionnaire.service';
import {Questionnaire} from '../../../api/model/questionnaire.model';
import {SelectionModel} from '@angular/cdk/collections';
import {TdPulseAnimation} from '@covalent/core';
import {QuestionnaireDialogComponent} from '../questionnaire-dialog/questionnaire-dialog.component';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Page} from '../../../api/model/page.models';
import {environment} from '../../../../environments/environment';
import {SearchStore} from '../services/questionnaire-store.service';
import {QuestionnaireSelectionService} from '../services/questionnaire-selection.service';
import {TagSelectionService} from '../../tag/services/tag-selection.service';
import {Tag} from '../../../api/model/tag.model';


@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.css'],
  animations: [
    TdPulseAnimation(),
  ]
})
export class QuestionnaireListComponent implements OnInit, AfterViewInit {


  private _questionnaires: Questionnaire[] = [];
  public hideImg = false;
  public selection = new SelectionModel(true, []);
  public resultsLength = 0;
  public pageIndex = 0;
  public totalElements = 0;
  public last = false;
  public numberOfElements = 0;
  public pulseState = false;
  public data: any[] = [];
  public pageSize: number = environment.PAGE_SIZE;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public selectedRow: number;
  public tagsSelected: Tag[] = [];

  constructor(private questionnaireService: QuestionnaireService,
              private dialog: MatDialog,
              private route: ActivatedRoute,
              public questionnaireStore: SearchStore,
              private router: Router,
              private questionnaireSelectionService: QuestionnaireSelectionService,
              private tagSelectionService: TagSelectionService) {

    this.route.data.subscribe(data => {
      this.getPage(data.page, true);
    });

    questionnaireSelectionService.deletedObservable.subscribe((q) => {
        const itemIndex = this._questionnaires.findIndex(item => item.id === q.id);
        if (itemIndex !== -1) {
          this._questionnaires.splice(itemIndex, 1);
        }
      }
    );
    this.tagSelectionService.currentObservable.subscribe(message => this.tagsSelected = message)

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // if (this.questionnaireStore.selected) {
    //   this.scrollIntoView('questionnaireId_' + this.questionnaireStore.selected.toString());
    // }
  }

  // public removeById(id?: number) {
  //   const itemIndex = this._questionnaires.findIndex(item => item.id === id);
  //   if (itemIndex !== -1) {
  //     this._questionnaires.splice(itemIndex, 1);
  //   }
  // }

  public getQuestionnaires(pageIndex: number, pageSize: number, sort: string, reset?: boolean) {
    this.questionnaireService.getQuestionnaires(pageIndex, pageSize, sort).subscribe((page) => {
        this.getPage(page, reset);
      }
    );
  }

  private getPage(page: Page, reset?: boolean) {
    this.resultsLength = page.totalElements;
    this.last = page.last;

    if (!reset) {
      this.pageIndex++;
    } else {
      this._questionnaires = [];
      this.pageIndex = 0;
      this.numberOfElements = 0;
    }
    this.numberOfElements += page.numberOfElements;
    this.totalElements = page.totalElements;
    for (const item of page.content) {
      this._questionnaires.push(item);
    }
  }


  public search(reset?: boolean) {
    this.getQuestionnaires(this.pageIndex, this.pageSize, 'id', reset);
    this.pulseState = !this.pulseState;
  }


  public createQuestionnaire(event) {
    this.router.navigate(['/questionnaires/0']);
  }

  public deleteSelectedQuestionnaires() {
    this.questionnaireSelectionService.deleteSelectedQuestionnaires();
  }


  public firstLetter(questionnaire ?: Questionnaire): string {
    return questionnaire.title.substring(0, 1).toUpperCase();
  }

  public openQuestionnaireDialog(questionnaire ?: Questionnaire) {
    const config = new MatDialogConfig();
    config.data = {questionnaire: new Questionnaire()}
    config.panelClass = 'my-full-screen-dialog';

    const dialogRef = this.dialog.open(QuestionnaireDialogComponent, config);
    dialogRef.afterClosed().subscribe(q => {
      if (q) {
        const itemIndex = this._questionnaires.findIndex(item => item.id === q.id);
        if (itemIndex === -1) {
          this._questionnaires.push(q);
        } else {
          this._questionnaires[itemIndex] = q;
        }
        // this.scrollIntoView('questionnaireId_' + q.id.toString());
      }
    });
  }

  public imgQuestion(questionnaire: Questionnaire) {
    return './assets/images/question/question-simple.png';
  }

  public over(qestionnaire: Questionnaire) {
    console.log('over');
    if (qestionnaire) {
      // qestionnaire.hideImg = true;
    }
  }

  get questionnaires(): Observable<Questionnaire[]> {
    return Observable.of(this._questionnaires);
  }

  public setClickedRow = function (questionnaire: Questionnaire) {
    this.questionnaireStore.selected = questionnaire.id;
    this.questionnaireSelectionService.swap(questionnaire);
  }

  public swapTag(tag: Tag) {
    console.log(tag);
    this.tagSelectionService.swap(tag);
  }

  public isSelected(questionnaire: Questionnaire):
    boolean {
    return this.questionnaireSelectionService.isSelected(questionnaire);
  }

  public multiSelection(): number {
    return this.questionnaireSelectionService.size();
  }

  public multiSelectionChecked(event) {
    this._questionnaires.forEach((q) => {
      this.questionnaireSelectionService.select(q, event.checked);
    })
  }

  public pageSelection(): boolean {
    this._questionnaires.forEach((q) => {
        if (this.questionnaireSelectionService.isSelected(q)) {
          return true;
        }
      }
    );
    return false;
  }


  public multiSelect() {
    this._questionnaires.forEach((q) => {
      this.questionnaireSelectionService.swap(q);
    })
  }

  public scrollIntoView(id: string) {
    const el: HTMLElement = document.getElementById(id);
    if (el) {
      el.scrollIntoView()
    }
  }

  public navigateToSearchQuestions(questionnaire: Questionnaire) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        'questionnaireId': questionnaire.id,
      }
    };
    this.router.navigate(['/questions'], navigationExtras);
  }

  public onPaginateChange(event: any) {
    this.questionnaireService.getQuestionnaires(event.pageIndex, this.pageSize, 'id').subscribe((page) => {
        this.getPage(page, true);
      }
    );
  }


}
