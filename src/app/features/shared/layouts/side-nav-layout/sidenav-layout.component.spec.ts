import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavLayoutComponent } from './sidenav-layout.component';

describe('SideNavLayoutComponent', () => {
  let component: SideNavLayoutComponent;
  let fixture: ComponentFixture<SideNavLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
