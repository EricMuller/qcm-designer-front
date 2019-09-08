import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadNavListComponent } from './upload-nav-list.component';

describe('UploadNavListComponent', () => {
  let component: UploadNavListComponent;
  let fixture: ComponentFixture<UploadNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
