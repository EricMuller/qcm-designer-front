import {Tag} from './tag.model';
import {Response} from './response.model';
import {Entity} from './entity';

export class Question extends Entity {

  date_modification?: number;
  date_creation?: number;
  question: string;
  responses: Response[];
  tags?: Tag[];
  type: string;
  version?: number;
}
