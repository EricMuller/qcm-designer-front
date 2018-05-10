import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private _iconRegistry: MatIconRegistry,
              private _domSanitizer: DomSanitizer) {
    // this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
    //   this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent.svg'));
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
  }

}
