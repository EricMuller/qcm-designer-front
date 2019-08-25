import { Component, OnInit } from '@angular/core';
import {KeycloakGuardService} from '@app/core/auth/keycloak-guard.service';
import {User} from '@app/core/auth/user.model';


@Component({
  selector: 'app-user-menu-item',
  templateUrl: './user-menu-item.component.html',
  styleUrls: ['./user-menu-item.component.scss']
})
export class UserMenuItemComponent implements OnInit {

  constructor(private userGuardService: KeycloakGuardService) { }

  ngOnInit() {
  }

  public getUser(): User {
    return  this.userGuardService.getUser();
  }

}
