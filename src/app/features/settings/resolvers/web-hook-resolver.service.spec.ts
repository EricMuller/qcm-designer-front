import { TestBed } from '@angular/core/testing';

import { WebHookResolver } from './web-hook-resolver.service';

describe('WebHookResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebHookResolver = TestBed.get(WebHookResolver);
    expect(service).toBeTruthy();
  });
});
