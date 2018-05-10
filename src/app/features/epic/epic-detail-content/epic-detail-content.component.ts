import {Component, Input, OnInit} from '@angular/core';
import {Epic} from '../../../api/model/epic.model';

@Component({
  selector: 'app-epic-detail-content',
  templateUrl: './epic-detail-content.component.html',
  styleUrls: ['./epic-detail-content.component.scss']
})
export class EpicDetailContentComponent implements OnInit {

  @Input()
  public epic: Epic;


  constructor() {
  }

  ngOnInit() {
  }

}
