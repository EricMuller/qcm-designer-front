import { TestBed, inject } from '@angular/core/testing';

import { LoadingIndicator } from './loading-indicator.service';

describe('LoadingIndicatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingIndicator]
    });
  });

  it('should be created', inject([LoadingIndicator], (service: LoadingIndicator) => {
    expect(service).toBeTruthy();
  }));
});
