import {Component, OnInit, ViewChild} from '@angular/core';
import {TdFileInputComponent, TdLoadingFactory, TdLoadingService} from '@covalent/core';
import {Observable} from 'rxjs/Observable';
import {NotifierService} from '../../../core/simple-notifier.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-questionnaire-import',
  templateUrl: './questionnaire-import.component.html',
  providers: [TdLoadingService, TdLoadingFactory],
  styleUrls: ['./questionnaire-import.component.scss']

})
export class QuestionnaireImportComponent implements OnInit {

  private apiEndPoint = '/api/v1/upload/questionnaire';

  public sample =
    {
      number: 1,
      categorie: 'Java Basics',
      question: '"What is the difference between JDK and JRE?',
      response: '"JDK stands for Java Development Kit. It contains the tools and\nlibraries for development of Java programs.' +
      ' It also contains\ncompilers and debuggers needed to compile Java program,\n \nJRE stands for Java Runtime Environment. ' +
      'This is included in JDK.\nJRE provides libraries and JVM that is required to run a Java\nprogram.'
    };

  public fileSelectMsg = 'No file selected yet.';
  public fileUploadMsg = 'No file uploaded yet.';

  @ViewChild('singleFileUpload')
  public singleFileUpload: TdFileInputComponent;

  public loading = false;

  public files: any;

  constructor(private http: HttpClient,
              private notifierService: NotifierService) {

  }

  public uploadFile(file) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    // let headers = new Headers();
    // headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'application/json');
    // let options = new RequestOptions({headers: headers});
    this.loading = true;
    this.http.post(this.apiEndPoint, formData)
      .catch(error => Observable.throw(error)
      ).subscribe(
      data => {
        this.notifierService.notifySuccess('Upload Ok')
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    )
  }

  ngOnInit() {
  }

  selectEvent(file: File): void {
    this.fileSelectMsg = file.name;
  }

  cancelEvent(): void {
    this.fileSelectMsg = 'No file selected yet.';
    this.fileUploadMsg = 'No file uploaded yet.';
  }

  uploadEvent(file: File): void {
    this.fileUploadMsg = file.name;
    this.uploadFile(file)
  }

}
