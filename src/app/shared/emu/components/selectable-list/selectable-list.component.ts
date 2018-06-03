import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TdPulseAnimation} from '@covalent/core';
import {MatPaginator} from '@angular/material';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Page} from '../../../../api/services/page';
import {Entity} from '../../../../api/model/entity';
import {DataSelectionStore, FilterStore} from '../../stores/store-api';
import {Filter} from '../../filter/filter';
import {Subject} from 'rxjs/Subject';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

enum ViewMode {
  List = 1,
  Select,
}

@Component({
  selector: 'app-selectable-list',
  templateUrl: './selectable-list.component.html',
  styleUrls: ['./selectable-list.component.scss'],
  animations: [
    TdPulseAnimation(),
  ]
})
export class SelectableListComponent<T extends Entity> implements OnInit {

  public elements: T[] = [];
  public selected: T[] = [];
  public filters: Filter[];

  public resultsLength = 0;
  public pageIndex = 0;
  public totalElements = 0;
  public last = false;
  public numberOfElements = 0;

  public pageSize: number = environment.PAGE_SIZE;
  // delete paginator issue
  public curentPageSize = 0;

  public pulseState = false;
  public selectedRow: number;

  private _modeSelection: Subject<boolean> = new ReplaySubject<boolean>(1);
  readonly modeSelection$: Observable<boolean> = this._modeSelection.asObservable();

  public currentView: ViewMode = ViewMode.List;

  private _loadingData: Subject<boolean> = new BehaviorSubject(false);
  readonly loadingData$: Observable<boolean> = this._loadingData.asObservable();

  public loadingData: boolean = false;

  @Input() dataSelectionStore: DataSelectionStore<T>;
  @Input() filterStore: FilterStore;
  @Input() emptyMessage = 'Create a new one';

  @Input() name: string;

  @Output('onClosed') onClosed = new EventEmitter<boolean>();
  @Output('onCreate') onCreate = new EventEmitter<boolean>();
  @Output('onClearFilter') onClearFilter = new EventEmitter<boolean>();
  @ViewChild('paginator') paginator: MatPaginator;

  constructor() {
  }

  ngOnInit(): void {

    this.dataSelectionStore.deleted$.subscribe((element) => {
        const itemIndex = this.elements.findIndex(item => item.id === element.id);
        if (itemIndex !== -1) {
          this.elements.splice(itemIndex, 1);
          if (this.elements.length === 0) {
            this.refresh(true);
            this._modeSelection.next(false)
          }
        }
      }
    );

    this.dataSelectionStore.selected$.subscribe((selected) => {
        this.selected = <T[]> selected;
        if (this.selected.length > 0) {
          this._modeSelection.next(true)
        } else {
          this._modeSelection.next(false)
          this.currentView = ViewMode.List;
        }
      }
    );

    this.refresh(true);
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

  retrieveElements(pageIndex: number, pageSize: number, sort: string, cleanBefore ?: boolean): Observable<boolean> {
    let filters = []
    if (this.filterStore) {
      filters = this.filterStore.filters();
    }
    this.loadingData = true;
    return this.dataSelectionStore.getPageByFilters(filters, pageIndex, pageSize, sort).mergeMap((page) => {
        this.getContentPage(page, cleanBefore);
        if (!this.elements.length) {
          this._modeSelection.next(false)
        }
        this.loadingData = false;
        return Observable.of(true);
      }
    );
  }

  onPaginateChange(event: any) {
    this.retrieveElements(event.pageIndex, this.pageSize, 'id', true).subscribe((b) => {

      }
    );
  }

  onValidFilter(event) {
    this.onClosed.emit(true);
  }

  public deleteSelectedElements() {
    this.dataSelectionStore.deleteElements(this.selected);
  }

  refresh(reset: boolean) {

    this.retrieveElements(this.pageIndex, this.pageSize, 'id', reset).subscribe((b) => {
      this.pulseState = !this.pulseState;
    });
  }

  public selectAll() {
    this.elements.forEach((q) => {
      this.dataSelectionStore.selectElement(q, true);
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
    return this.dataSelectionStore.selectedSize();
  }

  filterSize(): number {
    return this.filterStore ? this.filterStore.selectedSize() : 0;
  }

  public clearFilter() {
    this.filterStore.unSelectAllElement();
    this.refresh(true);
  }

  onCreateElement(event): void {
    this.onCreate.emit(true);
  }


}
