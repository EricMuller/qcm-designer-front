import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-fab-toggle',
  templateUrl: './fab-toggle.component.html',
  styleUrls: ['./fab-toggle.component.scss']
})
export class FabToggleComponent implements OnInit {

  @Input() iconOff;
  @Input() iconOn;

  @Input() toolTipOff;
  @Input() toolTipOn;

  @Output() onClick = new EventEmitter();
  private _opened: Boolean = false;

  @Output()
  public toggleEvent = new EventEmitter<Boolean>();

  constructor() {
  }

  getToolTip(): string {
    return this._opened ? this.toolTipOn : this.toolTipOff;
  }

  ngOnInit() {
    this.onClick.subscribe(() => {
      this.opened = !this.opened;
    });
  }

  public toggle($event) {
    this.opened = !this.opened;
  }


  public get opened() {
    return this._opened;
  }

  public set opened(edition: Boolean) {
    this._opened = edition;
    this.toggleEvent.emit(this.opened);
  }

}
