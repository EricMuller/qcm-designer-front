import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAppComponent } from './question-app.component';

describe('QuestionAppComponent', () => {
  let component: QuestionAppComponent;
  let fixture: ComponentFixture<QuestionAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
