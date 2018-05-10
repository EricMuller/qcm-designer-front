import { TestBed, inject } from '@angular/core/testing';

import { QuestionnairesResolver } from './questionnaires-resolver.service';

describe('QuestionnairesResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionnairesResolver]
    });
  });

  it('should be created', inject([QuestionnairesResolver], (service: QuestionnairesResolver) => {
    expect(service).toBeTruthy();
  }));
});
