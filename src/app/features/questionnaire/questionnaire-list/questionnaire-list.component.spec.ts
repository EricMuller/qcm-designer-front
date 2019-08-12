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
import {CategoryService} from 'api/qcm/services/category.service';
import {QuestionService} from '../../../../api/qcm/services/question.service';
import {Questionnaire} from '../../../../api/qcm/model/questionnaire.model';
import {Category} from '../../../../api/qcm/model/category.model';


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
        {provide: CategoryService, useClass: MockCategoryService},
        {provide: QuestionService, useClass: MockQuestionnaireService}
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
  public getCategories(): Observable<Category[]> {

    const category = new Category();
    category.id = '1';
    return Observable.of([category]);

  }
};
