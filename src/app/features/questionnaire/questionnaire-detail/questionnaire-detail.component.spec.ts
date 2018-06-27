import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionnaireDetailComponent} from './questionnaire-detail.component';
import {MatCardModule, MatIconModule, MatListModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {QuestionService} from '../../../api/qcm/services/questionnaire.service';
import {NotifierService} from '../../../core/simple-notifier.service';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {QuestionService} from '../../../api/qcm/services/question.service';

describe('QuestionnaireDetailComponent', () => {
  let component: QuestionnaireDetailComponent;
  let fixture: ComponentFixture<QuestionnaireDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [  HttpClientModule, BrowserAnimationsModule, RouterTestingModule,
        MatIconModule, MatToolbarModule, MatCardModule, MatListModule, MatSnackBarModule
      ],
      declarations: [QuestionnaireDetailComponent],
      providers: [QuestionService, QuestionService, NotifierService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
