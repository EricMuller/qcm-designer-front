import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireNavListComponent } from './questionnaire-nav-list.component';

describe('QuestionnaireNavListComponent', () => {
  let component: QuestionnaireNavListComponent;
  let fixture: ComponentFixture<QuestionnaireNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
