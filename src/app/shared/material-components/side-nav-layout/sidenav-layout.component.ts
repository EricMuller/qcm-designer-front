import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {AfterContentInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import {Observable, of, Subscription} from 'rxjs';
import {map, share} from 'rxjs/operators';

@Component({
  selector: 'app-sidenav-layout',
  templateUrl: './sidenav-layout.component.html',
  styleUrls: ['./sidenav-layout.component.scss']

})
export class SideNavLayoutComponent implements OnInit, OnDestroy, AfterContentInit {


  @ViewChild('leftsidenav', {static: false})
  public leftSidenav: MatSidenav;

  private querySubscription: Subscription;

  private isSmallScreen = false;

  @Input()
  public appName = '';

  @Input()
  public title = '';

  @Input()
  public opened = false;

  @Input()
  public style = 'width:300px;border-right: 1px solid rgba(0, 0, 0, 0.12)';

  language$: Observable<string>;

  navigation = [
    {link: '/home', label: 'menu.about'},
    {link: '/questionnaires/list', label: 'menu.questionnaires'},
    {link: '/questions/list', label: 'menu.questions'},
  ];

  navigationSideMenu = [
    ...this.navigation,
    {link: '/import/questionnaires', label: 'menu.import'},
  ];

  isHandset$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver, public translate: TranslateService) {
  }

  public login(event): void {
  }

  ngOnInit(): void {



    console.log('SideNavLayoutComponent.ngOnInit ok');
  }

  ngAfterContentInit(): void {
    this.isHandset$ = this.breakpointObserver.observe([Breakpoints.Handset])
      .pipe(
        map(
          result => {
            console.log(result);
            return result.matches;
          })
      );
    console.log('SideNavLayoutComponent.ngAfterContentInit ok');
  }

  checkScreen(): void {
    // this._ngZone.run(() => {
    //   this.isSmallScreen = this.media.query('sm'); // or '(min-width: 960px) and (max-width: 1279px)'
    // });
  }

  watchScreen(): void {
    // this._querySubscription = this.media.registerQuery('sm').subscribe((matches: boolean) => {
    //   this._ngZone.run(() => {
    //     this.isSmallScreen = matches;
    //   });
    // });
  }

  isGtSm(): Observable<boolean> {
    // media.registerQuery('gt-sm')
    return of(true);
  }

  ngOnDestroy(): void {
    // this._querySubscription.unsubscribe();
  }

  onLanguageSelect($event): void {

  }

}
