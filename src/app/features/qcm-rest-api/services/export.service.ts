import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {QCM_API_ENDPOINT_TOKEN, QcmApiEndPoint} from '@app/features/qcm-rest-api/qcm-api-end-point';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ExportService {


  constructor(private http: HttpClient, @Inject(QCM_API_ENDPOINT_TOKEN) private endPoint: QcmApiEndPoint) {
  }

  public getExportById(id: number, type: string) {
    return this.http.get<any>(this.endPoint.EXPORT + id.toString() + '/' + type, {responseType: 'blob' as 'json'});
  }

}
