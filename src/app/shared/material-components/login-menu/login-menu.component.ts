import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {KeycloakGuardService} from '@app/core/auth/keycloak-guard.service';


@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss'],
})
export class LoginMenuComponent implements OnInit {

  constructor(private keycloakGuardService: KeycloakGuardService, private router: Router) {
  }

  ngOnInit() {
  }

  public isLoggedIn(): boolean {
    return this.keycloakGuardService.isLoggedIn();
  }

  public login() {
    this.keycloakGuardService.login();
  }

  public logout() {
    this.keycloakGuardService.logout();

  }

  public profile() {
    this.router.navigate(['/questionnaires/user']);
  }


}
