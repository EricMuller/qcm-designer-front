import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from 'app/api/qcm/services/user.service'
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  public title;

  private subscription: Subscription;

  constructor(private userService: UserService) {

    const MESSAGE = 'Welcome to QCM online ';

    this.title = MESSAGE;

    this.subscription = this.userService.getCurrentUser()
      .subscribe((user) => {
          if (user) {
            this.title = 'Welcome ' + user.username + ' to QCM online ';
          }
        },
        (error) => {
          this.title = MESSAGE;
        }
      )

  }

  ngOnInit() {

  }

  public ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
