import {Component, Inject, Input, OnInit} from '@angular/core';
import {Questionnaire} from '@app/features/qcm-rest-api/model/questionnaire.model';
import {QCM_API_ENDPOINT_TOKEN, QcmApiEndPoint} from '@app/features/qcm-rest-api/qcm-api-end-point';
import {ExportService} from '@app/features/qcm-rest-api/services/export.service';
import {QuestionnaireStore} from '@app/features/stores/questionnaire-store.service';
import {Observable} from 'rxjs/internal/Observable';


@Component({
  selector: 'app-questionnaire-nav-list',
  templateUrl: './questionnaire-nav-list.component.html',
  styleUrls: ['./questionnaire-nav-list.component.scss']
})
export class QuestionnaireNavListComponent implements OnInit {

  @Input()
  public elements$: Observable<Questionnaire[]>;

  constructor(private questionnaireStore: QuestionnaireStore,
              private tagStore: QuestionnaireStore, @Inject(QCM_API_ENDPOINT_TOKEN) private endPoint: QcmApiEndPoint,
              private exportService: ExportService) {
  }

  ngOnInit() {
  }

  public isSelected(questionnaire: Questionnaire):
    boolean {
    return this.questionnaireStore.isSelected(questionnaire);
  }

  public swapTag(tag: Questionnaire) {
    console.log(tag);
    this.tagStore.swapElement(tag);
  }

  public setClickedRow = function (questionnaire: Questionnaire) {
    this.questionnaireStore.swapElement(questionnaire);
  };

  download(questionnaire: Questionnaire, type: string) {

    this.exportService.getExportById(questionnaire.id, type)
      .subscribe(data => {
        this.downLoadFile(data, questionnaire.title + '.' + type);
      });
  }

  /*
  'application/json' , 'application/msword' , 'application/octet-stream'
   */
  private downLoadFile(data: any, fileName: string) {
    const blob = new Blob([data], {type: 'application/octet-stream'});
    // const url = window.URL.createObjectURL(blob);
    // const pwa = window.open(url, '_blank');
    // if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
    //   alert('Please disable your Pop-up blocker and try again.');
    // }
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', fileName);
    link.click();
  }

}
