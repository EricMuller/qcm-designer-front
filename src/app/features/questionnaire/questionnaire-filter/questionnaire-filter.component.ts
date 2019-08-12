import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TdPulseAnimation} from '@covalent/core';

@Component({
  selector: 'app-questionnaire-filter',
  templateUrl: './questionnaire-filter.component.html',
  styleUrls: ['./questionnaire-filter.component.scss'],
  animations: [
    TdPulseAnimation(),
  ]
})
export class QuestionnaireFilterComponent implements OnInit {

  @Output('onClosed')
  private onClosed = new EventEmitter<boolean>();

  ngOnInit() {
  }

  public closeCard(event) {
    this.onClosed.emit(event);
  }


}