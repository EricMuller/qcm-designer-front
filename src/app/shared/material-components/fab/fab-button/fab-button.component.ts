import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-fab-button',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss']
})
export class FabButtonComponent implements OnInit {

  @Input() color;
  @Input() icon;
  @Output() onClick = new EventEmitter();
  @ViewChild('anchor', {static: true}) element;

  constructor() {
  }

  ngOnInit() {
  }

}
