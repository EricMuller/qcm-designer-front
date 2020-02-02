import {Entity} from './entity';

export class Upload extends Entity {

  fileName: string;

  loading: boolean;

  status: string;

  dateCreation: Date;

  data: any;

  contentType: string;
}
