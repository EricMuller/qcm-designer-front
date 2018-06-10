import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-fab-toggle',
  templateUrl: './fab-toggle.component.html',
  styleUrls: ['./fab-toggle.component.scss']
})
export class FabToggleComponent implements OnInit {

  @Input() iconOff;
  @Input() iconOn;
  @Output() onClick = new EventEmitter();
  private _edition: Boolean;

  constructor() {
  }

  ngOnInit() {
  }

  public get edition() {
    return this._edition;
  }

  public set edition(val) {
    this._edition = val;
  }
}
