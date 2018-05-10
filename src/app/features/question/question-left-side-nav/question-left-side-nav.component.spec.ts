import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionLeftSideNavComponent } from './question-left-side-nav.component';

describe('QuestionLeftSideNavComponent', () => {
  let component: QuestionLeftSideNavComponent;
  let fixture: ComponentFixture<QuestionLeftSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionLeftSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionLeftSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
