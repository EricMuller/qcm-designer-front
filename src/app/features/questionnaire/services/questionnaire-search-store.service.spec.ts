import { TestBed, inject } from '@angular/core/testing';

import { SearchStore } from './questionnaire-search-store.service';

describe('QuestionnaireStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchStore]
    });
  });

  it('should be created', inject([SearchStore], (service: SearchStore) => {
    expect(service).toBeTruthy();
  }));
});
