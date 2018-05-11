import {Component, Input, OnInit} from '@angular/core';
import {Questionnaire} from '../../../../api/model/questionnaire.model';
import {Observable} from 'rxjs/Observable';
import {QuestionnaireSelectionService} from '../../services/questionnaire-selection.service';
import {Tag} from '../../../../api/model/tag.model';
import {TagSelectionService} from '../../../tag/services/tag-selection.service';

@Component({
  selector: 'app-questionnaire-nav-list',
  templateUrl: './questionnaire-nav-list.component.html',
  styleUrls: ['./questionnaire-nav-list.component.scss']
})
export class QuestionnaireNavListComponent implements OnInit {

  @Input()
  public questionnaires: Observable<Questionnaire[]>;

  constructor(private questionnaireSelectionService: QuestionnaireSelectionService, private tagSelectionService: TagSelectionService) {
  }

  ngOnInit() {
  }

  public isSelected(questionnaire: Questionnaire):
    boolean {
    return this.questionnaireSelectionService.isSelected(questionnaire);
  }


  public swapTag(tag: Tag) {
    console.log(tag);
    this.tagSelectionService.swap(tag);
  }

  public setClickedRow = function (questionnaire: Questionnaire) {
    // this.questionnaireStore.selected = questionnaire.id;
    this.questionnaireSelectionService.swap(questionnaire);
  }

}
