import {Injectable} from '@angular/core';
import {Category} from '@app/features/qcm-rest-api/model/category.model';
import {CategoryService} from '@app/features/qcm-rest-api/services/category.service';
import {CategoryType} from '@app/features/qcm-rest-api/services/type.enum';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireCategoryResolver {

  constructor(private categoryService: CategoryService) {
  }

  resolve(): Observable<Category[]> {
    return this.categoryService.getCategories(CategoryType.QUESTIONNAIRE);
  }

}
