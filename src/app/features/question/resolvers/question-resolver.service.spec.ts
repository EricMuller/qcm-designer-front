import { TestBed, inject } from '@angular/core/testing';

import { QuestionResolver } from './question-resolver.service';

describe('QuestionResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionResolver]
    });
  });

  it('should be created', inject([QuestionResolver], (service: QuestionResolver) => {
    expect(service).toBeTruthy();
  }));
});
