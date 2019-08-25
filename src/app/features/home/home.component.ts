import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '@app/shared/qcm-rest-api/services/user.service';
import {Subscription} from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  public title;

  private subscription: Subscription;

  constructor(private userService: UserService) {

    const MESSAGE = 'Welcome to Open QCM  ';

    this.title = MESSAGE;

    // this.subscription = this.userService.getCurrentUser()
    //   .subscribe((user) => {
    //       if (user) {
    //         this.title = 'Welcome ' + user.user_name + ' to Open QCM ';
    //       }
    //     },
    //     (error) => {
    //       this.title = MESSAGE;
    //     }
    //   )

  }

  ngOnInit() {

  }

  public ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    // this.subscription.unsubscribe();
  }

}
