import {Component, Input, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {TdMediaService} from '@covalent/core';
import {Subscription} from 'rxjs/Subscription';
import {UserGuardService} from '../../../core/user-guard.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidenav-layout',
  templateUrl: './sidenav-layout.component.html',
  styleUrls: ['./sidenav-layout.component.scss'],
  providers: [TdMediaService]
})
export class SideNavLayoutComponent implements OnInit, OnDestroy {

  @ViewChild('leftsidenav')
  public leftSidenav: MatSidenav;

  @ViewChild('rightsidenav')
  public rightSidenav: MatSidenav;

  private _querySubscription: Subscription;

  private isSmallScreen = false;

  @Input()
  public appName = '';

  @Input()
  public title = '';

  @Input()
  public opened: Boolean = false;

  @Input()
  public style = 'width:300px;border-right: 1px solid rgba(0, 0, 0, 0.12)';


  constructor(public media: TdMediaService, private _ngZone: NgZone) {
  }

  public login(event): void {
  }


  ngOnInit(): void {
    this.watchScreen();
  }

  checkScreen(): void {
    this._ngZone.run(() => {
      this.isSmallScreen = this.media.query('sm'); // or '(min-width: 960px) and (max-width: 1279px)'
    });
  }

  watchScreen(): void {
    this._querySubscription = this.media.registerQuery('sm').subscribe((matches: boolean) => {
      this._ngZone.run(() => {
        this.isSmallScreen = matches;
      });
    });
  }

  ngOnDestroy(): void {
    this._querySubscription.unsubscribe();
  }


}
