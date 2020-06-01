import {InjectionToken} from '@angular/core';
import {environment} from '../../../environments/environment';

export interface QcmApiEndPoint {
  CATEGORY: string;
  TAGS: string;
  USERS: string;
  QUESTIONNAIRES: string;
  QUESTIONS: string;
  UPLOAD: string;
  EXPORT: string;
}


export const QCM_API_ENDPOINT_TOKEN =
  new InjectionToken<QcmApiEndPoint>('qcm-api-endpoint');
