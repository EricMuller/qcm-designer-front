import { TestBed, inject } from '@angular/core/testing';

import { QuestionService } from './questionnaire.service';
import {HttpClientModule} from '@angular/common/http';

describe('QuestionnaireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [QuestionService]
    });
  });

  it('should be created', inject([QuestionService], (service: QuestionService) => {
    expect(service).toBeTruthy();
  }));
});
