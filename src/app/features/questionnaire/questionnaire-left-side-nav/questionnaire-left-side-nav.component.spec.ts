import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireLeftSideNavComponent } from './questionnaire-left-side-nav.component';

describe('QuestionnaireLeftSideNavComponent', () => {
  let component: QuestionnaireLeftSideNavComponent;
  let fixture: ComponentFixture<QuestionnaireLeftSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireLeftSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireLeftSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
