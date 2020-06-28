import {Category} from '@app/features/qcm-rest-api/model/category.model';
import {Entity} from './entity';

export class Upload extends Entity {

  fileName: string;

  loading: boolean;

  status: string;

  dateCreation: Date;

  data: any;

  contentType: string;

  dateModification?: number;

  category?: Category;

  version?: number;

  type?: string;

}
