import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireAppComponent } from './questionnaire-app.component';

describe('QuestionnaireAppComponent', () => {
  let component: QuestionnaireAppComponent;
  let fixture: ComponentFixture<QuestionnaireAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
