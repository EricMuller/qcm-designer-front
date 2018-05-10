import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabToggleComponent } from './fab-toggle.component';

describe('FabToggleComponent', () => {
  let component: FabToggleComponent;
  let fixture: ComponentFixture<FabToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
