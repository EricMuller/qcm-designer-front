import {CategoryType} from '@app/features/qcm-rest-api/services/type.enum';

export class Category {

  uuid: string;
  libelle: string;
  type: string;

  constructor(type: string) {
    this.type = type;
  }
}
