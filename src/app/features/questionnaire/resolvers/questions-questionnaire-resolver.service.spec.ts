import { TestBed, inject } from '@angular/core/testing';

import { QuestionsQuestionnaireResolver } from './questions-questionnaire-resolver.service';

describe('QuestionsQuestionnaireResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsQuestionnaireResolver]
    });
  });

  it('should be created', inject([QuestionsQuestionnaireResolver], (service: QuestionsQuestionnaireResolver) => {
    expect(service).toBeTruthy();
  }));
});
