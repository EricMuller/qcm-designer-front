import { TestBed, inject } from '@angular/core/testing';

import { QuestionnaireStore } from './questionnaire-store.service';

describe('QuestionnaireStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionnaireStore]
    });
  });

  it('should be created', inject([QuestionnaireStore], (service: QuestionnaireStore) => {
    expect(service).toBeTruthy();
  }));
});
