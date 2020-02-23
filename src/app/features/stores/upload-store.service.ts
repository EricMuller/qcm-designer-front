import {Injectable} from '@angular/core';
import {Upload} from '@app/features/qcm-rest-api/model/upload.model';
import {UploadService} from '@app/features/qcm-rest-api/services/upload.service';
import {QuestionnaireStore} from '@app/features/stores/questionnaire-store.service';
import {TagStore} from '@app/features/stores/tag-store.service';
import {Criteria} from '@app/features/qcm-rest-api/model/criteria';
import {Question} from '@app/features/qcm-rest-api/model/question.model';
import {Page} from '@app/features/qcm-rest-api/services/page';
import {QuestionService} from '@app/features/qcm-rest-api/services/question.service';
import {SelectStoreAdapter} from '@app/features/stores/selection-store';
import {CrudStore, CriteriaStore} from '@app/features/stores/store-api';
import {Observable, of, ReplaySubject, Subject} from 'rxjs';
import {mergeMap, publishLast, refCount} from 'rxjs/operators';


@Injectable()
export class UploadStore extends SelectStoreAdapter<Upload> implements CriteriaStore<Upload>, CrudStore<Upload, number> {

  constructor(private uploadService: UploadService) {
    super();
  }

  getElement(id: number): Observable<Upload> {
    return  this.uploadService.getUploadById(id);
  }

  getPage(page?: number, size?: number, sort?: string): Observable<Page> {
    const obs = this.uploadService.getUploads(page, size, sort);
    obs.subscribe(
      p => {
        this.publishPage(p);
      });
    return obs;
  }

  deleteElement(upload: Upload): Observable<Upload> {
    return this.uploadService.deleteUploadById(upload.id).pipe(
      mergeMap((data) => {
        return this.deletePageElement(upload);
      }));
  }

  deleteElements(uploads: Upload[]) {
    for (const upload of uploads) {
      const id: number = upload.id;
      this.uploadService.deleteUploadById(id).subscribe((data) => {
        this.deletePageElement(upload);
        }
      );
    }
  }

  saveElement(element: Upload): Observable<Upload> {
    if (element.id > 0) {
      return this.uploadService.putUpload(element);
    } else {
      return this.uploadService.postUpload(element);
    }
  }

  getPageByCriteria(criteria: Criteria[], page?: number, size?: number, sort?: string): Observable<Page> {

    console.log(criteria);
    const obs = this.uploadService.getUploadByCriteria(criteria, page, size, sort)
      .pipe(publishLast(), refCount());
    obs.subscribe(
      p => {
        this.publishPage(p);
      });
    return obs;
  }

  // criterias(): Criteria[] {
  //
  //   return [];
  // }

  clearCriterias() {

  }
}
