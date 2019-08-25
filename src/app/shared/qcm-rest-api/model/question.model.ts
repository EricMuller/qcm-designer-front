import {Tag} from './tag.model';
import {Reponse} from './response.model';
import {Entity} from './entity';

export class Question extends Entity {
  date_modification?: number;
  date_creation?: number;
  question: string;
  responses: Reponse[];
  tags?: Tag[];
  type: string;
  status: string;
  version?: number;
}
