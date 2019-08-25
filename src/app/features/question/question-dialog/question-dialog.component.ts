import {Component, Inject, OnInit} from '@angular/core';
import {Question} from '@app/shared/qcm-rest-api/model/question.model';
import {Questionnaire} from '@app/shared/qcm-rest-api/model/questionnaire.model';
import {QuestionnaireDialogComponent} from '../../questionnaire/questionnaire-dialog/questionnaire-dialog.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';



@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.scss']
})
export class QuestionDialogComponent implements OnInit {

  public questionnaire: Questionnaire;
  public question: Question;

  constructor(public dialogRef: MatDialogRef<QuestionnaireDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.questionnaire = Object.assign({}, this.data['questionnaire']);
    this.question = Object.assign({}, this.data['question']);
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  public save() {
    // this.questionnaireService.postQuestionnaire(this.questionnaire).subscribe(
    //   (q) => {
    //     this.dialogRef.close(q);
    //   }
    // );
  }

}
