import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {QuestionnaireService} from '../../../api/services/questionnaire.service';
import {Questionnaire} from '../../../api/model/questionnaire.model';
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

  public elements: Questionnaire[] = [];
  public selected: Questionnaire[] = [];
  public selectedTags: Tag[] = [];

  public resultsLength = 0;
  public pageIndex = 0;
  public totalElements = 0;
  public last = false;
  public numberOfElements = 0;

  public pageSize: number = environment.PAGE_SIZE;

  public pulseState = false;
  public selectedRow: number;
  public showFilterView = false;
  public showSelectedView = false;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private tagSelectionService: TagSelectionService,
    private selectionService: QuestionnaireSelectionService,
    private dataService: QuestionnaireService
  ) {

    this.initSubscribe();
  }

  private initSubscribe() {

    this.route.data.subscribe(data => {
      this.getContentPage(data.page, true);
    });

    this.selectionService.deleted$.subscribe((questionnaire) => {
        const itemIndex = this.elements.findIndex(item => item.id === questionnaire.id);
        if (itemIndex !== -1) {
          this.elements.splice(itemIndex, 1);
          if (this.elements.length === 0) {
            this.refresh(true);
            this.showSelectedView = false;
          }
        }
      }
    );

    this.selectionService.current$.subscribe((selected) => {
        this.selected = selected;
      }
    );

    this.tagSelectionService.current$.subscribe(tags => this.selectedTags = tags)
  }

  ngOnInit() {
  }

  private  getElements(pageIndex: number, pageSize: number, sort: string, cleanBefore ?: boolean) {
    this.dataService.getQuestionnaires(pageIndex, pageSize, sort).subscribe((page) => {
        this.getContentPage(page, cleanBefore);
      }
    );
  }

  public onPaginateChange(event: any) {
    this.getElements(event.pageIndex, this.pageSize, 'id', true);
  }

  private getContentPage(page: Page, cleanBefore ?: boolean) {
    this.resultsLength = page.totalElements;
    this.last = page.last;
    if (!cleanBefore) {
      this.pageIndex++;
    } else {
      this.elements = [];
      this.pageIndex = 0;
      this.numberOfElements = 0;
    }
    this.numberOfElements += page.numberOfElements;
    this.totalElements = page.totalElements;
    for (const item of page.content) {
      this.elements.push(item);
    }
  }

  public refresh(reset ?: boolean) {
    this.getElements(this.pageIndex, this.pageSize, 'id', reset);
    this.pulseState = !this.pulseState;
    this.showSelectedView = !this.showSelectedView;
  }

  public createQuestionnaire(event) {
    this.router.navigate(['/questionnaires/0']);
  }

  public deleteSelectedQuestionnaires() {
    this.selectionService.deleteSelectedQuestionnaires();
  }

  public swapFilterCard() {
    this.showFilterView = !this.showFilterView;
  }

  public swapSelectedList() {
    this.showSelectedView = !this.showSelectedView;
  }

  public modeSelection(): number {
    return this.selectionService.size();
  }

  public multiSelect() {
    this.elements.forEach((q) => {
      this.selectionService.select(q, true);
    })
  }

}
