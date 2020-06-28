import {Category} from '@app/features/qcm-rest-api/model/category.model';
import {Tag} from './tag.model';
import {Reponse} from './response.model';
import {Entity} from './entity';

export class Question extends Entity {
  dateModification?: number;
  dateCreation: Date;
  question: string;
  responses: Reponse[];
  tags?: Tag[];
  type: string;
  category?: Category;
  status: string;
  version?: number;

}


export class QuestionPatch  {

  status: string;
}
