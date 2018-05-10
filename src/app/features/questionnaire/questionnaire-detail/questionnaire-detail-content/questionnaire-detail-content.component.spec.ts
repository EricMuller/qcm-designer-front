import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireDetailContentComponent } from './questionnaire-detail-content.component';

describe('QuestionnaireDetailContentComponent', () => {
  let component: QuestionnaireDetailContentComponent;
  let fixture: ComponentFixture<QuestionnaireDetailContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireDetailContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireDetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
