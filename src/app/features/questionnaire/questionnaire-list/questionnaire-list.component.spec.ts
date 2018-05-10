import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionnaireListComponent} from './questionnaire-list.component';
import {
  MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressSpinnerModule,
  MatSelectModule, MatSidenavModule, MatSnackBarModule
} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {Observable} from 'rxjs/Rx';
import {NotifierService} from '../../../core/simple-notifier.service';

import {QuestionnaireService} from '../../../api/services/questionnaire.service';
import {Questionnaire} from '../../../api/model/questionnaire.model';
import {EpicService} from '../../../api/services/epic.service';
import {Epic} from '../../../api/model/epic.model';



describe('QuestionnaireListComponent', () => {
  let component: QuestionnaireListComponent;
  let fixture: ComponentFixture<QuestionnaireListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatListModule, MatSidenavModule, MatFormFieldModule, MatCardModule,
        MatSelectModule, ReactiveFormsModule, FormsModule, MatSnackBarModule, MatInputModule,
        HttpClientModule, BrowserAnimationsModule, RouterTestingModule],
      declarations: [QuestionnaireListComponent],
      providers: [ NotifierService,
        {provide: EpicService, useClass: MockCategoryService},
        {provide: QuestionnaireService, useClass: MockQuestionnaireService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

class MockQuestionnaireService {
  public getQuestionnaires(): Observable<Questionnaire[]> {
    const questionnaire = new Questionnaire();
    questionnaire.id = 1;
    return Observable.of([questionnaire]);
  }
};


class MockCategoryService {
  public getCategories(): Observable<Epic[]> {

    const category = new Epic();
    category.id = '1';
    return Observable.of([category]);

  }
};
