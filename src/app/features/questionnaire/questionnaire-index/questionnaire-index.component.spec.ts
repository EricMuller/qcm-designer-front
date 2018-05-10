import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireIndexComponent } from './questionnaire-index.component';

describe('QuestionnaireIndexComponent', () => {
  let component: QuestionnaireIndexComponent;
  let fixture: ComponentFixture<QuestionnaireIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
