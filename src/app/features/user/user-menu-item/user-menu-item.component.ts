import { Component, OnInit } from '@angular/core';
import {UserGuardService} from '../../../core/user-guard.service';
import {User} from '@api/qcm/model/user.model';

@Component({
  selector: 'app-user-menu-item',
  templateUrl: './user-menu-item.component.html',
  styleUrls: ['./user-menu-item.component.scss']
})
export class UserMenuItemComponent implements OnInit {

  constructor(private userGuardService: UserGuardService) { }

  ngOnInit() {
  }

  public getUser(): User {
    return  this.userGuardService.getUser();
  }

}
