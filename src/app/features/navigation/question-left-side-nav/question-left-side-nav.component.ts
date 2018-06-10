import { Component, OnInit } from '@angular/core';
import {UserGuardService} from '../../../core/user-guard.service';
import {User} from '../../../api/model/user.model';

@Component({
  selector: 'app-question-left-side-nav',
  templateUrl: './question-left-side-nav.component.html',
  styleUrls: ['./question-left-side-nav.component.scss']
})
export class QuestionLeftSideNavComponent implements OnInit {

  constructor(private userGuardService: UserGuardService) { }

  ngOnInit() {

  }

  public getUser(): User {
    return  this.userGuardService.getUser();
  }


}
