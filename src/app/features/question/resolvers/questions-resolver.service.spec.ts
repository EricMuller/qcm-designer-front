import { TestBed, inject } from '@angular/core/testing';

import { QuestionsResolver } from './questions-resolver.service';

describe('QuestionsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsResolver]
    });
  });

  it('should be created', inject([QuestionsResolver], (service: QuestionsResolver) => {
    expect(service).toBeTruthy();
  }));
});
