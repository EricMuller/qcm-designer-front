import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {UserService} from '@app/shared/qcm-rest-api/services/user.service';

import {HomeComponent} from './home.component';
import {MatCardModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';



describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, HttpClientModule
      ],
      declarations: [HomeComponent],
      providers: [UserService, CookieService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
