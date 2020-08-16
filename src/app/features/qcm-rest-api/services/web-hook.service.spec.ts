import { TestBed } from '@angular/core/testing';

import { WebHookService } from './web-hook.service';

describe('WebHookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebHookService = TestBed.get(WebHookService);
    expect(service).toBeTruthy();
  });
});
