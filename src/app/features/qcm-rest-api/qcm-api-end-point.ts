import {InjectionToken} from '@angular/core';

export interface QcmApiEndPoint {
  CATEGORY: string;
  TAGS: string;
  USERS: string;
  QUESTIONNAIRES: string;
  QUESTIONS: string;
  UPLOAD: string;
  EXPORT: string;
  IMPORT: string;
}


export const QCM_API_ENDPOINT_TOKEN =
  new InjectionToken<QcmApiEndPoint>('qcm-api-endpoint');
