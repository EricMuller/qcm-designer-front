import { TestBed, inject } from '@angular/core/testing';

import { SearchStore } from './tag-questionnaire-filter-store-s.service';

describe('TagQuestionnaireFilterStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchStore]
    });
  });

  it('should be created', inject([SearchStore], (service: SearchStore) => {
    expect(service).toBeTruthy();
  }));
});
