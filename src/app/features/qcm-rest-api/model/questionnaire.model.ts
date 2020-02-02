import {Category} from './category.model';
import {Entity} from './entity';
import {Question} from './question.model';
import {Tag} from './tag.model';

export class Questionnaire extends Entity {

  title?: string;
  description?: string;
  website?: string;
  category?: Category;
  questions?: Array<Question>;
  version?: number;
  tags?: Tag[] = [];
  dateCreation: Date;
}
