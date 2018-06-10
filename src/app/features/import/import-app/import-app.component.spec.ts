import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportAppComponent } from './import-app.component';

describe('ImportAppComponent', () => {
  let component: ImportAppComponent;
  let fixture: ComponentFixture<ImportAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
