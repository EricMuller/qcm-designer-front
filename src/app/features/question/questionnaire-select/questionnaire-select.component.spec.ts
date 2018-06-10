import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireSelectComponent } from './questionnaire-select.component';

describe('QuestionnaireSelectComponent', () => {
  let component: QuestionnaireSelectComponent;
  let fixture: ComponentFixture<QuestionnaireSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
