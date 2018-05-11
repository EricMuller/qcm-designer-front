import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {SideNavLayoutComponent} from '../../../shared/layouts/side-nav-layout/sidenav-layout.component';

@Component({
  selector: 'app-questionnaire-app',
  templateUrl: './questionnaire-app.component.html',
  styleUrls: ['./questionnaire-app.component.scss']

})
export class QuestionnaireAppComponent  implements OnInit {


  @ViewChild('layout')
  private layout: SideNavLayoutComponent;


  ngOnInit() {
  }

  public toggle(){
    this.layout.rightSidenav.toggle();
  }
}
