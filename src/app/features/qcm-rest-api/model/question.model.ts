import {Tag} from './tag.model';
import {Reponse} from './response.model';
import {Entity} from './entity';

export class Question extends Entity {
  dateModification?: number;
  dateCreation?: number;
  question: string;
  responses: Reponse[];
  tags?: Tag[];
  type: string;
  status: string;
  version?: number;
}
