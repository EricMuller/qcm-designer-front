import {Component, OnInit} from '@angular/core';
import {KeycloakGuardService} from '@app/core/auth/keycloak-guard.service';
import {User} from '@app/core/auth/user.model';



import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public token: Observable<string>;

  constructor(private userGuardService: KeycloakGuardService) {
    this.token = this.userGuardService.getToken();
  }

  ngOnInit() {
  }

  public getUser(): User {
    return this.userGuardService.getUser();
  }

}
