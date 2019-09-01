import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionnaireQuestionListComponent} from './question-list.component';
import {MatIconModule, MatListModule, MatSnackBarModule, MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {NotifierService} from '../../../core/notifications/simple-notifier.service';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {QuestionService} from 'app/features/qcm-rest-api/services/question.service';


describe('QuestionListComponent', () => {
  let component: QuestionnaireQuestionListComponent;
  let fixture: ComponentFixture<QuestionnaireQuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatIconModule, MatListModule, MatSnackBarModule,
        HttpClientModule, BrowserAnimationsModule, RouterTestingModule
      ],
      declarations: [QuestionnaireQuestionListComponent],
      providers: [QuestionService, NotifierService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })
  ;
});
