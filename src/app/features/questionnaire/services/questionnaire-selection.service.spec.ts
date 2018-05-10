import { TestBed, inject } from '@angular/core/testing';

import { QuestionnaireSelectionService } from './questionnaire-selection.service';

describe('QuestionnaireSelectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionnaireSelectionService]
    });
  });

  it('should be created', inject([QuestionnaireSelectionService], (service: QuestionnaireSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
