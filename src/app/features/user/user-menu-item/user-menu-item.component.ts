import { Component, OnInit } from '@angular/core';
import {KeycloakGuard} from '@app/core/auth/keycloak.guard';
import {User} from '@app/core/auth/user.model';


@Component({
  selector: 'app-user-menu-item',
  templateUrl: './user-menu-item.component.html',
  styleUrls: ['./user-menu-item.component.scss']
})
export class UserMenuItemComponent implements OnInit {

  constructor(private userGuardService: KeycloakGuard) { }

  ngOnInit() {
  }

  // public getUser(): User {
  //   return  this.userGuardService.getUser();
  // }

}
