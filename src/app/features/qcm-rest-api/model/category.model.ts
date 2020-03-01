import {CategoryType} from '@app/features/qcm-rest-api/services/type.enum';

export class Category {

  id: string;
  libelle: string;
  type: string;

  constructor(type: string) {
    this.type = type;
  }
}
