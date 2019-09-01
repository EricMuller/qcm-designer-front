import {HttpClient} from '@angular/common/http';
import {Component, Inject, OnInit} from '@angular/core';
import {NotifierService} from '@app/core/notifications/simple-notifier.service';
import {QCM_API_ENDPOINT_TOKEN, QcmApiEndPoint} from '@app/features/qcm-rest-api/qcm-api-end-point';


@Component({
  selector: 'app-questionnaire-import',
  templateUrl: './questionnaire-import.component.html',
  styleUrls: ['./questionnaire-import.component.scss']

})
export class QuestionnaireImportComponent implements OnInit {

  public apiEndPoint = this.endPoint.UPLOAD + 'json';

  public sample =
    {
      number: 1,
      categorie: 'Java Basics',
      question: '"What is the difference between JDK and JRE?',
      response: '"JDK stands for Java Development Kit. It contains the tools and\nlibraries for development of Java programs.' +
        ' It also contains\ncompilers and debuggers needed to compile Java program,\n \nJRE stands for Java Runtime Environment. ' +
        'This is included in JDK.\nJRE provides libraries and JVM that is required to run a Java\nprogram.'
    };

  public files: any;

  constructor(private http: HttpClient,
              private notifierService: NotifierService,
     @Inject(QCM_API_ENDPOINT_TOKEN) private endPoint: QcmApiEndPoint) {

  }
  onFileComplete(event) {
    this.notifierService.notifySuccess('Upload Ok');
  }

  ngOnInit() {
  }



}
