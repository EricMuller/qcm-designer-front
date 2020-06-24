import {Component, Input, OnInit} from '@angular/core';
import {NotifierService} from '@app/core/notifications/simple-notifier.service';
import {Upload} from '@app/features/qcm-rest-api/model/upload.model';
import {UploadService} from '@app/features/qcm-rest-api/services/upload.service';
import {UploadStore} from '@app/features/stores/upload-store.service';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-upload-nav-list',
  templateUrl: './upload-nav-list.component.html',
  styleUrls: ['./upload-nav-list.component.scss']
})
export class UploadNavListComponent implements OnInit {

  @Input()
  public elements: Upload[];

  @Input()
  public elements$: Observable<Upload[]>;

  constructor(private uploadService: UploadService,
              private notifier: NotifierService,
              public uploadStore: UploadStore) {
  }

  ngOnInit() {

    // this.store.page$.subscribe(value => this.elements = value.content);
  }

  import(upload: Upload) {
    upload.loading = true;

    this.uploadService.importUploadByUuid(upload.uuid)
      .subscribe((message: Upload) => {
        upload.loading = false;
        this.notifier.notifyInfo(message.status, 1000);
      }
        , error => {
          upload.loading = false;
        });
  }

  delete(item: Upload) {
    this.uploadStore.deleteElement(item).subscribe(
      (message: Upload) => {
        this.notifier.notifyInfo(message.fileName + ' deleted', 1000);
      }
      , error => {
        item.loading = false;
      });
  }

  download(item: Upload) {
    this.uploadStore.getElement(item.uuid)
      .subscribe(
        (message: Upload) => {
          this.notifier.notifyInfo(message.fileName, 1000);
          const blob = this.b64toBlob(message.data, message.contentType, 512);
          const url = window.URL.createObjectURL(blob);
          window.open(url, '_blank');
        })
    ;
  }

  b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, {type: contentType});
  }

}
