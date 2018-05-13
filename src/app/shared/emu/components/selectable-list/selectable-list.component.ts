import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TdPulseAnimation} from '@covalent/core';
import {MatDialog, MatPaginator} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Page} from '../../../../api/services/page';
import {Entity} from '../../../../api/model/entity';
import {DataSelectionStore, FilterStore} from '../../stores/store-api';
import {Filter} from '../../../../features/filter/filter';

enum View {
  List = 1,
  Select,
  Filter
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

  public pulseState = false;
  public selectedRow: number;
  public modeSelection = false;

  public currentView: View = View.List;

  public loadingData = false;

  public entity = 'record';

  @Input() dataSelectionStore: DataSelectionStore<T>;
  @Input() filterStore: FilterStore;
  @Input() entityName;
  @Input() modeFilter = false;
  @Input() name: string;
  @Input() public filterable = false;
  @Output('onClosed') onClosed = new EventEmitter<boolean>();
  @ViewChild('paginator') paginator: MatPaginator;

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    this.dataSelectionStore.deleted$.subscribe((element) => {
        const itemIndex = this.elements.findIndex(item => item.id === element.id);
        if (itemIndex !== -1) {
          this.elements.splice(itemIndex, 1);
          if (this.elements.length === 0) {
            this.onRefresh(true);
            this.modeSelection = false;
          }
        }
      }
    );

    this.dataSelectionStore.selected$.subscribe((selected) => {
        this.selected = <T[]> selected;
        if (this.selected.length > 0) {
          this.modeSelection = true;
        } else {
          this.modeSelection = false;
          this.currentView = View.List;
        }
      }
    );

    this.onRefresh(true);
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
    this.numberOfElements += page.numberOfElements;
    this.totalElements = page.totalElements;
  }

  retrieveElements(pageIndex: number, pageSize: number, sort: string, cleanBefore ?: boolean): Observable<boolean> {
    let filters = []
    if (this.filterable) {
      filters = this.filterStore.filters();
    }
    return this.dataSelectionStore.getPageByFilters(filters, pageIndex, pageSize, sort).mergeMap((page) => {
        this.getContentPage(page, cleanBefore);
        if (!this.elements.length) {
          this.modeSelection = false;
        }
        return Observable.of(true);
      }
    );
  }

  onPaginateChange(event: any) {
    this.retrieveElements(event.pageIndex, this.pageSize, 'id', true).subscribe((b) => {

      }
    );
  }

  onCreateElement(event): Promise<boolean> {
    return this.router.navigate([`/${this.entityName}s/0`]);
  }

  clearFilters() {
    this.filterStore.unSelectAllElement();
    this.onRefresh(true);
  }

  onValidFilter(event) {
    this.onClosed.emit(true);
  }

  onDeleteSelectedElements() {
    this.dataSelectionStore.deleteElements(this.selected);
  }

  onRefresh(reset: boolean) {
    this.loadingData = true;
    this.retrieveElements(this.pageIndex, this.pageSize, 'id', reset).subscribe((b) => {
      this.loadingData = false;
      this.pulseState = !this.pulseState;
    });

  }

  onSelectAll() {
    this.elements.forEach((q) => {
      this.dataSelectionStore.selectElement(q, true);
    });
  }

  onFilterView() {
    this.currentView = View.Filter;
  }

  onCloseFilterView(valid) {
    this.currentView = View.List;
    if (valid) {
      this.filters = this.filterStore.filters();

    }
  }

  onSwapSelectedView() {
    if (this.currentView === View.List) {
      this.currentView = View.Select;
    } else {
      this.currentView = View.List;
    }
  }

  selectionSize(): number {
    return this.dataSelectionStore.selectedSize();
  }

  filterSize(): number {
    return this.filterStore ? this.filterStore.selectedSize() : 0;
  }

  onCloseCard(event): void {
    this.onClosed.emit(false);
  }

  isFilterView(): boolean {
    return this.currentView === View.Filter;
  }

  isSelectedView(): boolean {
    return this.currentView === View.Select;
  }

  isListView(): boolean {
    return this.currentView === View.List;
  }


}
