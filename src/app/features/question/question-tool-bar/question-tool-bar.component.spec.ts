import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionToolBarComponent } from './question-tool-bar.component';

describe('QuestionToolBarComponent', () => {
  let component: QuestionToolBarComponent;
  let fixture: ComponentFixture<QuestionToolBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionToolBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
