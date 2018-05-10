import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicDetailContentComponent } from './epic-detail-content.component';

describe('CategoryDetailContentComponent', () => {
  let component: EpicDetailContentComponent;
  let fixture: ComponentFixture<EpicDetailContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicDetailContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicDetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
