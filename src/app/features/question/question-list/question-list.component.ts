import {Component, OnInit, ViewChild} from '@angular/core';
import {Question} from '../../../api/model/question.model';
import {Observable} from 'rxjs/Observable';
import {TdPulseAnimation} from '@covalent/core';
import {NotifierService} from '../../../core/simple-notifier.service';
import {MatDialog, MatPaginator} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {Page} from '../../../api/model/page.models';
import {environment} from '../../../../environments/environment';
import {QuestionService} from '../../../api/services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
  animations: [
    TdPulseAnimation(),
  ]
})
export class QuestionListComponent implements OnInit {

  public _questions: Question[] = [];


  public pulseState = false;

  public resultsLength = 0;
  public pageIndex = 0;
  public totalElements = 0;
  public last = false;
  public numberOfElements = 0;
  public pageSize: number = environment.PAGE_SIZE;

  objects: any[] = [
    {id: 1, city: 'San Diego', population: '4M'},
    {id: 2, city: 'San Franscisco', population: '6M'},
    {id: 3, city: 'Los Angeles', population: '5M'},
    {id: 4, city: 'Austin', population: '3M'},
    {id: 5, city: 'New York City', population: '10M'},
  ];

  filteredObjects: string[];

  objectsModel: string[] = this.objects.slice(0, 0);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private questionService: QuestionService,
              private dialog: MatDialog,
              private notifierService: NotifierService,
              private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.getPage(data.questions, true);
      // this._questions = data.questions.content;
      // this.getQuestionsByQuestionnaireId(this.questionnaire.id);
    });
  }

  ngOnInit() {
    this.filterObjects('');
  }

  get questions(): Observable<Question[]> {
    return Observable.of(this._questions);
  }

  filterObjects(value: string): void {
    this.filteredObjects = this.objects.filter((obj: any) => {
      if (value) {
        return obj.city.toLowerCase().indexOf(value.toLowerCase()) > -1;
      } else {
        return false;
      }
    }).filter((filteredObj: any) => {
      return this.objectsModel ? this.objectsModel.indexOf(filteredObj) < 0 : true;
    });
  }

  public search(v: any) {

  }

  public onPaginateChange(event: any) {
    this.questionService.getPageQuestions(event.pageIndex, this.pageSize, 'dateModification').subscribe((page) => {
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

  public imgQuestion() {
    return './assets/images/question/question-simple.png';
  }

}
