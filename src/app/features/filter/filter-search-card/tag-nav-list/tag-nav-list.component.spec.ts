import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagNavListComponent } from './tag-nav-list.component';

describe('TagNavListComponent', () => {
  let component: TagNavListComponent;
  let fixture: ComponentFixture<TagNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
