import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDetailContentComponent } from './category-detail-content.component';

describe('CategoryDetailContentComponent', () => {
  let component: CategoryDetailContentComponent;
  let fixture: ComponentFixture<CategoryDetailContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryDetailContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
