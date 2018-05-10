import { TestBed, inject } from '@angular/core/testing';

import { TagSelectionService } from './tag-selection.service';

describe('TagSelectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagSelectionService]
    });
  });

  it('should be created', inject([TagSelectionService], (service: TagSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
