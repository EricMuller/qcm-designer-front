import { TestBed } from '@angular/core/testing';

import { UserNameGuard } from './user-name.guard';

describe('UserNameGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserNameGuard = TestBed.get(UserNameGuard);
    expect(service).toBeTruthy();
  });
});
