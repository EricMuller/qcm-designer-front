import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionnaireListComponent} from './questionnaire-list.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule
} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {Observable, of} from 'rxjs';
import {NotifierService} from '../../../core/notifications/simple-notifier.service';
import {CategoryService} from 'app/features/qcm-rest-api/services/category.service';
import {QuestionService} from '../../qcm-rest-api/services/question.service';
import {Questionnaire} from '../../qcm-rest-api/model/questionnaire.model';
import {Category} from '../../qcm-rest-api/model/category.model';


describe('QuestionnaireListComponent', () => {
  let component: QuestionnaireListComponent;
  let fixture: ComponentFixture<QuestionnaireListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatListModule, MatSidenavModule, MatFormFieldModule, MatCardModule,
        MatSelectModule, ReactiveFormsModule, FormsModule, MatSnackBarModule, MatInputModule,
        HttpClientModule, BrowserAnimationsModule, RouterTestingModule],
      declarations: [QuestionnaireListComponent],
      providers: [NotifierService,
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
    questionnaire.uuid = '1';
    return of([questionnaire]);
  }
}


class MockCategoryService {
  public getCategories(): Observable<Category[]> {

    const category = new Category('rr');
    category.uuid = '1';
    return of([category]);

  }
}
