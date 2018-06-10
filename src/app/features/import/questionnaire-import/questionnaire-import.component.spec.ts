import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireImportComponent } from './questionnaire-import.component';

describe('QuestionnaireImportComponent', () => {
  let component: QuestionnaireImportComponent;
  let fixture: ComponentFixture<QuestionnaireImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
