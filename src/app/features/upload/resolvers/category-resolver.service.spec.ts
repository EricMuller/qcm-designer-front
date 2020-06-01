import { TestBed } from '@angular/core/testing';

import { CategoryResolver } from './category-resolver.service';

describe('CategoryResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryResolver = TestBed.get(CategoryResolver);
    expect(service).toBeTruthy();
  });
});
