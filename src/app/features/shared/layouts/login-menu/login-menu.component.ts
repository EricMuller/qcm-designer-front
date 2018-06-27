import { Component, OnInit } from '@angular/core';
import {UserGuardService} from '../../../../core/user-guard.service';
import {Router} from '@angular/router';
import {TdPulseAnimation} from '@covalent/core';
import {User} from '../../../../api/qcm/model/user.model';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss'],
  animations: [
    TdPulseAnimation(),
  ]
})
export class LoginMenuComponent implements OnInit {

  private authentified: Boolean = false;
  public pulseState = false;
  constructor(private userGuardService: UserGuardService, private router: Router) { }

  ngOnInit() {
  }

  public isAuthentified(): Boolean {
    this.authentified = this.userGuardService.isAuthentified();
    return this.authentified;
  }

  public logout() {
    this.userGuardService.logout();
    this.authentified = false;
  }

  public profile() {
    this.router.navigate(['/questionnaires/user']);
  }

  public getUser(): User {
    return  this.userGuardService.getUser();
  }



}
