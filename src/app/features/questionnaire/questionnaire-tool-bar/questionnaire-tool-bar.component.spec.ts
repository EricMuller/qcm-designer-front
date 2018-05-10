import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireToolBarComponent } from './questionnaire-tool-bar.component';

describe('QuestionnaireToolBarComponent', () => {
  let component: QuestionnaireToolBarComponent;
  let fixture: ComponentFixture<QuestionnaireToolBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireToolBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
