import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EpicService} from '../../../api/services/epic.service';
import {Epic} from '../../../api/model/epic.model';

@Component({
  selector: 'app-epic-dialog',
  templateUrl: './epic-dialog.component.html',
  styleUrls: ['./epic-dialog.component.scss']
})
export class EpicDialogComponent implements OnInit {

  public epic: Epic;

  constructor(public dialogRef: MatDialogRef<EpicDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private epicService: EpicService) {
    this.epic = Object.assign({}, data['epic']);
  }

  ngOnInit() {
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  public save() {
    this.epicService.postEpic(this.epic).subscribe(
      (q) => {
        this.dialogRef.close(q);
      }
    );
  }

}
