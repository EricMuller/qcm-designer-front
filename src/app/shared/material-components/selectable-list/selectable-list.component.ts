import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';
import {Entity} from '@app/features/qcm-rest-api/model/entity';
import {Page} from '@app/features/qcm-rest-api/services/page';
import {CriteriaStore} from '@app/features/stores/store-api';
import {BehaviorSubject, Observable, of, ReplaySubject, Subject} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';

enum ViewMode {
  List = 1,
  Select,
}

@Component({
  selector: 'app-selectable-list',
  templateUrl: './selectable-list.component.html',
  styleUrls: ['./selectable-list.component.scss'],
})
export class SelectableListComponent<T extends Entity> implements OnInit, AfterContentInit {

  public elements: T[] = [];
  public selected: T[] = [];
  // public criterias: Criteria[];

  public resultsLength = 0;
  public pageIndex = 0;
  public totalElements = 0;
  public last = false;
  public numberOfElements = 0;

  public pageSize: number = environment.PAGE_SIZE;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // delete paginator issue
  public curentPageSize = 0;

  public pulseState = false;
  public selectedRow: number;

  private modeSelectionSubject: Subject<boolean> = new ReplaySubject<boolean>(1);
  readonly modeSelection$: Observable<boolean> = this.modeSelectionSubject.asObservable();

  public currentView: ViewMode = ViewMode.List;

  private loadingDataSubject: Subject<boolean> = new BehaviorSubject(false);
  readonly loadingData$: Observable<boolean> = this.loadingDataSubject.asObservable();

  public loadingData = false;

  @Input() criteriaStore: CriteriaStore<T>;
  @Input() emptyMessage = 'Create a new one';

  @Input() name: string;

  @Input() sortBy: string;

  @Output('onClosed') onClosed = new EventEmitter<boolean>();
  @Output('onCreate') onCreate = new EventEmitter<boolean>();
  @Output('onClearFilter') onClearFilter = new EventEmitter<boolean>();

  @ViewChild('paginator', {static: false}) paginator: MatPaginator;

  constructor() {
  }

  ngOnInit(): void {

    this.criteriaStore.deleted$.subscribe((element) => {
        const itemIndex = this.elements.findIndex(item => item.id === element.id);
        if (itemIndex !== -1) {
          this.elements.splice(itemIndex, 1);
          if (this.elements.length === 0) {
            this.refresh(true);
            this.modeSelectionSubject.next(false);
          }
        }
      }
    );

    this.criteriaStore.selected$.subscribe((selected) => {
        this.selected = selected as T[];
        if (this.selected.length > 0) {
          this.modeSelectionSubject.next(true);
        } else {
          this.modeSelectionSubject.next(false);
          this.currentView = ViewMode.List;
        }
      }
    );


    console.log('SelectableListComponent:ngOnInit');
  }

  private getContentPage(page: Page, cleanBefore ?: boolean) {
    this.resultsLength = page.totalElements;
    this.last = page.last;
    if (!cleanBefore) {
      this.pageIndex++;
    } else {
      this.elements.splice(0);
      this.pageIndex = 0;
      this.numberOfElements = 0;
      this.totalElements = 0;
    }
    for (const item of page.content) {
      this.elements.push(item);
    }
    this.curentPageSize = this.elements.length;
    this.numberOfElements += page.numberOfElements;
    this.totalElements = page.totalElements;
  }

  private refreshElements(pageIndex: number, pageSize: number, sort: string, cleanBefore ?: boolean): Observable<boolean> {

    const criteria = this.criteriaStore.criterias();

    this.loadingData = true;
    return this.criteriaStore.getPageByCriteria(criteria, pageIndex, pageSize, sort)
      .pipe( mergeMap((page) => {
          this.getContentPage(page, cleanBefore);
          if (!this.elements.length) {
            this.modeSelectionSubject.next(false);
          }
          this.loadingData = false;
          return of(true);
        }
      ));
  }

  onPaginateChange(event: any) {
    this.refreshElements(event.pageIndex, this.pageSize, this.sortBy, true).subscribe((b) => {

      }
    );
  }

  onValidFilter(event) {
    this.onClosed.emit(true);
  }

  public deleteSelectedElements() {
    this.criteriaStore.deleteElements(this.selected);
  }

  refresh(reset: boolean) {

    this.refreshElements(this.pageIndex, this.pageSize, this.sortBy, reset)
      .subscribe((b) => {
        this.pulseState = !this.pulseState;
        if (reset) {
          this.currentView = ViewMode.List;
          this.paginator.firstPage();
        }
      });

  }

  public selectAll() {
    this.elements.forEach((q) => {
      this.criteriaStore.selectElement(q, true);
    });
  }

  swapSelectedMode() {
    if (this.currentView === ViewMode.List) {
      this.currentView = ViewMode.Select;
    } else {
      this.currentView = ViewMode.List;
    }
  }

  isSelectedMode(): boolean {
    return this.currentView === ViewMode.Select;
  }


  selectionSize(): number {
    return this.criteriaStore.selectedSize();
  }

  filterSize(): number {
    return this.criteriaStore && this.criteriaStore.criterias() ? this.criteriaStore.criterias().length : 0;
  }

  public clearCriterias() {
    this.criteriaStore.clearCriterias();
    this.refresh(true);
  }

  onCreateElement(event): void {
    this.onCreate.emit(true);
  }

  ngAfterContentInit(): void {
    this.refresh(true);
  }

}
