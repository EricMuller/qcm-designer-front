import { TestBed } from '@angular/core/testing';

import { QuestionnaireCategoryResolver } from './category-resolver.service';

describe('CategoryResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionnaireCategoryResolver = TestBed.get(QuestionnaireCategoryResolver);
    expect(service).toBeTruthy();
  });
});
