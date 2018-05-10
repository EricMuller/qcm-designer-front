import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {Epic} from '../../../api/model/epic.model';
import {EpicDialogComponent} from '../../epic/epic-dialog/epic-dialog.component';
import {Questionnaire} from '../../../api/model/questionnaire.model';
import {QuestionnaireSelectionService} from '../services/questionnaire-selection.service';
import {TagSelectionService} from '../../tag/services/tag-selection.service';
import {Tag} from '../../../api/model/tag.model';

@Component({
  selector: 'app-questionnaire-left-side-nav',
  templateUrl: './questionnaire-left-side-nav.component.html',
  styleUrls: ['./questionnaire-left-side-nav.component.scss']
})
export class QuestionnaireLeftSideNavComponent implements OnInit, OnDestroy {


  public questionnairesSelected: Questionnaire[] = [];
  public tagsSelected: Tag[] = [];

  constructor(private dialog: MatDialog,
              private questionnaireSelectionService: QuestionnaireSelectionService,
              private tagSelectionService: TagSelectionService) {
  }

  ngOnInit() {
    this.questionnaireSelectionService.currentObservable.subscribe(message => this.questionnairesSelected = message);
  }

  ngOnDestroy(): void {

  }

  public createEpic() {

    this.openEpicDialog();
  }

  public openEpicDialog(epic?: Epic) {
    const config = new MatDialogConfig();
    config.data = {epic: new Epic()}
    config.panelClass = 'my-full-screen-dialog';
    const dialogRef = this.dialog.open(EpicDialogComponent, config);
    dialogRef.afterClosed().subscribe(q => {
      if (q) {
        // const itemIndex = this._questionnaires.findIndex(item => item.id === q.id);
        // if (itemIndex === -1) {
        //   this._questionnaires.push(q);
        // } else {
        //   this._questionnaires[itemIndex] = q;
        // }
        // this.scrollIntoView('questionnaireId_' + q.id.toString());
      }
    });
  }
}
