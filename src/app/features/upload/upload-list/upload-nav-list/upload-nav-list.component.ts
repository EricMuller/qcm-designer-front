import {Component, Input, OnInit} from '@angular/core';
import {NotifierService} from '@app/core/notifications/simple-notifier.service';
import {Message} from '@app/features/qcm-rest-api/model/Message.model';
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
              private uploadStore: UploadStore) {
  }

  ngOnInit() {

    // this.store.page$.subscribe(value => this.elements = value.content);
  }

  import(upload: Upload) {
    upload.loading = true;

    this.uploadService.importUploadById(upload.id)
      .subscribe((message: Message) => {
        upload.loading = false;
        this.notifier.notifyInfo(message.message, 1000);
      });
  }

  delete(item: Upload) {
    this.uploadStore.deleteElement(item).subscribe(
      (message: Upload) => {
        this.notifier.notifyInfo(message.fileName + ' deleted', 1000);
      });
  }
}
