import { TestBed } from '@angular/core/testing';

import { UploadResolver } from './upload-resolver.service';

describe('UploadResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadResolver = TestBed.get(UploadResolver);
    expect(service).toBeTruthy();
  });
});
