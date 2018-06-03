import { TestBed, inject } from '@angular/core/testing';

import { QuestionStore } from './question-store.service';

describe('QuestionStroreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionStore]
    });
  });

  it('should be created', inject([QuestionStore], (service: QuestionStore) => {
    expect(service).toBeTruthy();
  }));
});
