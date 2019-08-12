import {Injectable} from '@angular/core';

import {environment} from '../../../environments/environment';
import {User} from '@api/qcm/model/user.model';

declare var Keycloak: any;

@Injectable()
export class KeycloakService {

  static auth: any = {};

  static user: User;

  static init(): Promise<any> {
    const keycloakAuth: any = Keycloak({
      url: environment.KEYCLOAK_URL,
      realm: environment.KEYCLOAK_REALM,
      clientId: environment.KEYCLOAK_CLIENTID
    });

    KeycloakService.auth.loggedIn = false;

    return new Promise((resolve, reject) => {
      keycloakAuth
        .init({onLoad: 'login-required'})
        .success(() => {
          KeycloakService.auth.loggedIn = true;
          KeycloakService.auth.authz = keycloakAuth;
          KeycloakService.auth.logoutUrl =
            keycloakAuth.authServerUrl +
            '/realms/' +
            environment.KEYCLOAK_REALM +
            '/protocol/openid-connect/logout?redirect_uri=' +
            document.baseURI;

          KeycloakService.auth.authz.loadUserProfile().success(data => {
            this.user = new User();
            this.user.user_name = data.username;
            this.user.first_name = data.first_name;
            this.user.last_name = data.last_name;
            this.user.email = data.email;

            resolve();
          });
        })
        .error(() => {
          reject();
        });
    });
  }

  constructor() {
  }

  hasAnyRole(roles: String[]): boolean {
    for (let i = 0; i < roles.length; i++) {
      if (this.hasRole(roles[i])) {
        return true;
      }
    }

    return false;
  }

  hasRole(role: String): boolean {
    return KeycloakService.auth.authz.hasRealmRole(role);
  }

  hasManageUsersRole(): boolean {
    return KeycloakService.auth.authz.hasResourceRole('manage-users', 'realm-management');
  }

  // logout() {
  //   console.log('*** LOGOUT');
  //   KeycloakService.auth.loggedIn = false;
  //   KeycloakService.auth.authz = null;
  //
  //   window.location.href = KeycloakService.auth.logoutUrl;
  // }

  getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (KeycloakService.auth.authz.token) {
        KeycloakService.auth.authz
          .updateToken(90) // refresh token if it will expire in 90 seconds or less
          .success(() => {
            resolve(<string>KeycloakService.auth.authz.token);
          })
          .error(() => {
            reject('Failed to refresh token');
          });
      } else {
        reject('Not logged in');
      }
    });
  }

  logout(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (KeycloakService.auth.authz.token) {
        KeycloakService.auth.authz
          .logout()
          .success(() => {
            resolve(<string>KeycloakService.auth.authz.token);
          })
          .error(() => {
            reject('Failed to logout');
          });
      } else {
        reject('Not logged in');
      }
    });
  }

  getUser(): User {
    return KeycloakService.user;
  }

}
