import { TestBed, inject } from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import {QuestionService} from './question.service';

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
