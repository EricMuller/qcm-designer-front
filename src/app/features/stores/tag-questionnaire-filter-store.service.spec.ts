import { TestBed, inject } from '@angular/core/testing';

import { TagQuestionnaireFilterStore } from './tag-questionnaire-filter-store-s.service';

describe('TagQuestionnaireFilterStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagQuestionnaireFilterStore]
    });
  });

  it('should be created', inject([TagQuestionnaireFilterStore], (service: TagQuestionnaireFilterStore) => {
    expect(service).toBeTruthy();
  }));
});
