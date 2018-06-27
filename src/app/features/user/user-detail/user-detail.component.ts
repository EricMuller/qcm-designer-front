import {Component, OnInit} from '@angular/core';
import {UserGuardService} from '../../../core/user-guard.service';
import {User} from '../../../api/qcm/model/user.model';
import {Observable} from 'rxjs/Observable';

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
