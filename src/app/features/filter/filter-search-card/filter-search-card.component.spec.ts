import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSearchCardComponent } from './filter-search-card.component';

describe('FilterSearchCardComponent', () => {
  let component: FilterSearchCardComponent;
  let fixture: ComponentFixture<FilterSearchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSearchCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
