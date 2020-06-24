import {HttpClient} from '@angular/common/http';
import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {NotifierService} from '@app/core/notifications/simple-notifier.service';
import {Upload} from '@app/features/qcm-rest-api/model/upload.model';
import {QCM_API_ENDPOINT_TOKEN, QcmApiEndPoint} from '@app/features/qcm-rest-api/qcm-api-end-point';
import {UploadStore} from '@app/features/stores/upload-store.service';
import {MaterialFileUploadComponent} from '@app/features/upload/material-file-upload/material-file-upload.component';
import {SelectableListComponent} from '@app/shared/material-components/selectable-list/selectable-list.component';


@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.scss']

})
export class UploadListComponent implements OnInit {

  apiEndPoint = this.endPoint.UPLOAD + 'json';
  accept = 'application/json,.json';
  sample =
    {
      number: 1,
      categorie: 'Java Basics',
      question: '"What is the difference between JDK and JRE?',
      response: '"JDK stands for Java Development Kit. It contains the tools and\nlibraries for development of Java programs.' +
        ' It also contains\ncompilers and debuggers needed to compile Java program,\n \nJRE stands for Java Runtime Environment. ' +
        'This is included in JDK.\nJRE provides libraries and JVM that is required to run a Java\nprogram.'
    };

  files: any;
  filter = false;

  @ViewChild('list', {static: false})
  private list: SelectableListComponent<Upload>;

  @ViewChild('upload', {static: false})
  private upload: MaterialFileUploadComponent;

  constructor(private http: HttpClient,
              private notifierService: NotifierService, @Inject(QCM_API_ENDPOINT_TOKEN) private endPoint: QcmApiEndPoint,
              public uploadStore: UploadStore) {

  }

  onFileComplete(event: Upload) {
    // this.list.refresh(true);
    // this.uploadStore.
    console.log(event);
    if (event.uuid) {
      this.uploadStore.addPageElement(event);
      this.notifierService.notifySuccess('Upload Ok');
    } else {
      this.notifierService.notifyError('Upload KO');
    }

  }

  ngOnInit() {
  }

  create() {
    this.upload.onClick();
  }


}
