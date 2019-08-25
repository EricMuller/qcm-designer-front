import {environment} from '../../../environments/environment';

export const QcmApi = {
  CATEGORY: environment.QCM_REST_API_HOST + '/qcm/api/v1/categories/',
  TAGS: environment.QCM_REST_API_HOST + '/qcm/api/v1/tags/',
  USERS: environment.QCM_REST_API_HOST + '/users/api/v1/users/',
  QUESTIONNAIRES: environment.QCM_REST_API_HOST + '/qcm/api/v1/questionnaires/',
  QUESTIONS: environment.QCM_REST_API_HOST + '/qcm/api/v1/questions/',
  UPLOAD: environment.QCM_REST_API_HOST + '/qcm/api/v1/upload/',
}
