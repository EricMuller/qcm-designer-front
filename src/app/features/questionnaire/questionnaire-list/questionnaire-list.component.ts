import {Component, OnInit, ViewChild} from '@angular/core';
import {MatCard, MatDialog, MatPaginator, MatSort} from '@angular/material';
import {QuestionnaireService} from '../../../api/services/questionnaire.service';
import {Questionnaire} from '../../../api/model/questionnaire.model';
import {SelectionModel} from '@angular/cdk/collections';
import {TdPulseAnimation} from '@covalent/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../api/model/page.models';
import {environment} from '../../../../environments/environment';
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
export class QuestionnaireListComponent implements OnInit {


  private questionnaires: Questionnaire[] = [];
  private questionnairesSelected: Questionnaire[] = [];

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
  @ViewChild('matSearch') matCard: MatCard;

  public selectedRow: number;
  public selectedTags: Tag[] = [];

  public showFilterCard = false;
  public showSelectedQuestionnaires = false;

  constructor(private questionnaireService: QuestionnaireService,
              private dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router,
              private questionnaireSelectionService: QuestionnaireSelectionService,
              private tagSelectionService: TagSelectionService) {

    this.initSubscribe();
  }

  private initSubscribe() {

    this.route.data.subscribe(data => {
      this.getContentPage(data.page, true);
    });

    this.questionnaireSelectionService.deleted$.subscribe((questionnaire) => {
        const itemIndex = this.questionnaires.findIndex(item => item.id === questionnaire.id);
        if (itemIndex !== -1) {
          this.questionnaires.splice(itemIndex, 1);
          if (this.questionnaires.length === 0) {
            this.refresh(true);
            this.showSelectedQuestionnaires = false;
          }
        }
      }
    );

    this.questionnaireSelectionService.current$.subscribe((questionnaires) => {
        this.questionnairesSelected = questionnaires;
      }
    );

    this.tagSelectionService.current$.subscribe(tags => this.selectedTags = tags)
  }

  ngOnInit() {
  }

  public getQuestionnaires(pageIndex: number, pageSize: number, sort: string, cleanBefore?: boolean) {
    this.questionnaireService.getQuestionnaires(pageIndex, pageSize, sort).subscribe((page) => {
        this.getContentPage(page, cleanBefore);
      }
    );
  }

  public onPaginateChange(event: any) {
    this.getQuestionnaires(event.pageIndex, this.pageSize, 'id', true);
  }

  private getContentPage(page: Page, cleanBefore?: boolean) {
    this.resultsLength = page.totalElements;
    this.last = page.last;
    if (!cleanBefore) {
      this.pageIndex++;
    } else {
      this.questionnaires = [];
      this.pageIndex = 0;
      this.numberOfElements = 0;
    }
    this.numberOfElements += page.numberOfElements;
    this.totalElements = page.totalElements;
    for (const item of page.content) {
      this.questionnaires.push(item);
    }
  }

  public refresh(reset?: boolean) {
    this.getQuestionnaires(this.pageIndex, this.pageSize, 'id', reset);
    this.pulseState = !this.pulseState;
  }

  public createQuestionnaire(event) {
    this.router.navigate(['/questionnaires/0']);
  }

  public deleteSelectedQuestionnaires() {
    this.questionnaireSelectionService.deleteSelectedQuestionnaires();
  }

  public swapFilterCard() {
    this.showFilterCard = !this.showFilterCard;
  }

  public swapSelectedList() {
    this.showSelectedQuestionnaires = !this.showSelectedQuestionnaires;
  }


  public modeSelection(): number {
    return this.questionnaireSelectionService.size();
  }

  public multiSelect() {
    this.questionnaires.forEach((q) => {
      this.questionnaireSelectionService.select(q, true);
    })
  }

  // public scrollIntoView(id: string) {
  //   const el: HTMLElement = document.getElementById(id);
  //   if (el) {
  //     el.scrollIntoView()
  //   }
  // }

  // ngAfterViewInit() {
  //   // if (this.questionnaireStore.selected) {
  //   //   this.scrollIntoView('questionnaireId_' + this.questionnaireStore.selected.toString());
  //   // }
  // }

  // public removeById(id?: number) {
  //   const itemIndex = this._questionnaires.findIndex(item => item.id === id);
  //   if (itemIndex !== -1) {
  //     this._questionnaires.splice(itemIndex, 1);
  //   }
  // }

  // public firstLetter(questionnaire ?: Questionnaire): string {
  //   return questionnaire.title.substring(0, 1).toUpperCase();
  // }

  //
  // public openQuestionnaireDialog(questionnaire ?: Questionnaire) {
  //   const config = new MatDialogConfig();
  //   config.data = {questionnaire: new Questionnaire()}
  //   config.panelClass = 'my-full-screen-dialog';
  //
  //   const dialogRef = this.dialog.open(QuestionnaireDialogComponent, config);
  //   dialogRef.afterClosed().subscribe(q => {
  //     if (q) {
  //       const itemIndex = this.questionnaires.findIndex(item => item.id === q.id);
  //       if (itemIndex === -1) {
  //         this.questionnaires.push(q);
  //       } else {
  //         this.questionnaires[itemIndex] = q;
  //       }
  //       // this.scrollIntoView('questionnaireId_' + q.id.toString());
  //     }
  //   });
  // }

  // public imgQuestion(questionnaire: Questionnaire) {
  //   return './assets/images/question/question-simple.png';
  // }

  // public over(qestionnaire: Questionnaire) {
  //   console.log('over');
  //   if (qestionnaire) {
  //     // qestionnaire.hideImg = true;
  //   }
  // }

  // get questionnaires(): Observable<Questionnaire[]> {
  //   return Observable.of(this.questionnaires);
  // }


  // public multiSelectionChecked(event) {
  //   this._questionnaires.forEach((q) => {
  //     this.questionnaireSelectionService.select(q, event.checked);
  //   })
  // }
  //
  // public pageSelection(): boolean {
  //   this._questionnaires.forEach((q) => {
  //       if (this.questionnaireSelectionService.isSelected(q)) {
  //         return true;
  //       }
  //     }
  //   );
  //   return false;
  // }


  // public navigateToSearchQuestions(questionnaire: Questionnaire) {
  //   const navigationExtras: NavigationExtras = {
  //     queryParams: {
  //       'questionnaireId': questionnaire.id,
  //     }
  //   };
  //   this.router.navigate(['/questions'], navigationExtras);
  // }
  //

}
