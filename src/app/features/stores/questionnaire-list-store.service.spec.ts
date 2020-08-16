import { TestBed, inject } from '@angular/core/testing';

import { QuestionnaireListStore } from './questionnaire-list-store.service';

describe('QuestionnaireStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionnaireListStore]
    });
  });

  it('should be created', inject([QuestionnaireListStore], (service: QuestionnaireListStore) => {
    expect(service).toBeTruthy();
  }));
});
