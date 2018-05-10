import { TestBed, inject } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {EpicService} from './epic.service';

describe('CategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [EpicService]
    });
  });

  it('should be created', inject([EpicService], (service: EpicService) => {
    expect(service).toBeTruthy();
  }));
});
