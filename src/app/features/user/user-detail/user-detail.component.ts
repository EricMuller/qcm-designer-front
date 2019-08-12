import {Component, OnInit} from '@angular/core';
import {UserGuardService} from '../../../core/user-guard.service';
import {Observable} from 'rxjs/Observable';
import {User} from '@api/qcm/model/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public token: Observable<string>;

  constructor(private userGuardService: UserGuardService) {
    this.token = this.userGuardService.getToken();
  }

  ngOnInit() {
  }

  public getUser(): User {
    return this.userGuardService.getUser();
  }


}
