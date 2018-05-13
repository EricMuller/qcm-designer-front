import { TestBed, inject } from '@angular/core/testing';

import { QuestionnaireSelectionStore } from './questionnaire-selection-store.service';

describe('QuestionnaireSelectionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionnaireSelectionStore]
    });
  });

  it('should be created', inject([QuestionnaireSelectionStore], (service: QuestionnaireSelectionStore) => {
    expect(service).toBeTruthy();
  }));
});
