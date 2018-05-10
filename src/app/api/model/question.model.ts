import {Tag} from './tag.model';

export class Question {
  id: number;
  epic: string;
  question: string;
  reponse: string;
  version?: number;
  date_modification?: number;
  tags?: Tag[];
}
