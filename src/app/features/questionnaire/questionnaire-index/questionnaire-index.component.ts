import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../api/services/user.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-questionnaire-index',
  templateUrl: './questionnaire-index.component.html',
  styleUrls: ['./questionnaire-index.component.scss']
})
export class QuestionnaireIndexComponent implements OnInit {

  public title;

  private subscription: Subscription;

  constructor(private userService: UserService) {

    const MESSAGE = 'Welcome to QCM online ';

    this.title = MESSAGE;

    this.subscription = this.userService.getCurrentUser()
      .subscribe((user) => {
          if (user) {
            this.title = 'welcome ' + user.username + ' to QCM online ';
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
