import { TestBed, inject } from '@angular/core/testing';
import {QuestionListStore} from '@app/features/stores/question-list-store.service';



describe('QuestionStroreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionListStore]
    });
  });

  it('should be created', inject([QuestionListStore], (service: QuestionListStore) => {
    expect(service).toBeTruthy();
  }));
});
