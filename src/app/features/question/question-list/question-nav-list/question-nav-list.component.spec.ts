import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionNavListComponent } from './question-nav-list.component';

describe('QuestionNavListComponent', () => {
  let component: QuestionNavListComponent;
  let fixture: ComponentFixture<QuestionNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
