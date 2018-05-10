import { TestBed, inject } from '@angular/core/testing';

import { QuestionnaireResolver } from './questionnaire-resolver.service';

describe('QuestionnaireResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionnaireResolver]
    });
  });

  it('should be created', inject([QuestionnaireResolver], (service: QuestionnaireResolver) => {
    expect(service).toBeTruthy();
  }));
});
