import {Entity} from '@app/features/qcm-rest-api/model/entity';

export class User extends Entity {

  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  company: string;
  version: number;

}

