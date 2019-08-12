import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {UserService} from '@api/qcm/services/user.service';


@Component({
  selector: 'app-questionnaire-index',
  templateUrl: './questionnaire-index.component.html',
  styleUrls: ['./questionnaire-index.component.scss']
})
export class QuestionnaireIndexComponent implements OnInit, OnDestroy {

  public title;

  private subscription: Subscription;

  constructor(private userService: UserService) {

    const MESSAGE = 'Welcome to Open QCM ';

    this.title = MESSAGE;

    this.subscription = this.userService.getCurrentUser()
      .subscribe((user) => {
          if (user) {
            this.title = 'welcome ' + user.user_name + ' to Open QCM ';
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
