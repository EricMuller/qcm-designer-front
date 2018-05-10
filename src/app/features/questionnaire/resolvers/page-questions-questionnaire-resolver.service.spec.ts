import { TestBed, inject } from '@angular/core/testing';


import {PageQuestionsByQuestionnaireResolver} from './page-questions-questionnaire-resolver.service';

describe('PageQuestionsByQuestionnaireResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageQuestionsByQuestionnaireResolver]
    });
  });

  it('should be created', inject([PageQuestionsByQuestionnaireResolver], (service: PageQuestionsByQuestionnaireResolver) => {
    expect(service).toBeTruthy();
  }));
});
