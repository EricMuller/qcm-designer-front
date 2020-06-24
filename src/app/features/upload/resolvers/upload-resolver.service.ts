import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Upload} from '@app/features/qcm-rest-api/model/upload.model';
import {UploadService} from '@app/features/qcm-rest-api/services/upload.service';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';

@Injectable()
export class UploadResolver {

  constructor(private uploadService: UploadService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Upload> | Promise<Upload> | Upload {
    if (route.params.uuid && route.params.uuid !== '0') {
      return this.uploadService.getUploadByUuid(route.params.uuid);
    } else {
      return of(new Upload());
    }
  }

}
