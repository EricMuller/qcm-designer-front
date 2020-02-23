import { TestBed } from '@angular/core/testing';

import { QuestionCategoryResolver } from './category-resolver.service';

describe('CategoryResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionCategoryResolver = TestBed.get(QuestionCategoryResolver);
    expect(service).toBeTruthy();
  });
});
