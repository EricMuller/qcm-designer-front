import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../../api/model/category.model';
import {FormGroup} from '@angular/forms';
import {CategoryService} from '../../../../api/services/category.service';
import {Questionnaire} from '../../../../api/model/questionnaire.model';
import {TagService} from '../../../../api/services/tag.service';
import {Tag} from '../../../../api/model/tag.model';

@Component({
  selector: 'app-questionnaire-detail-content',
  templateUrl: './questionnaire-detail-content.component.html',
  styleUrls: ['./questionnaire-detail-content.component.scss']
})
export class QuestionnaireDetailContentComponent implements OnInit {

  @Input()
  public questionnaire: Questionnaire;

  @Input()
  public edition: boolean;

  @Input('form')
  public form: FormGroup;

  public categories: Category[];

  public tags: Tag[];

  public filteredObjects: Tag[];

  constructor(private categoryService: CategoryService, private tagService: TagService) {
  }

  ngOnInit() {

    this.categoryService.getCategories().subscribe((categories => {
      this.categories = categories;
    }));
    // this.categories = this.categorieService.getCategories();
    this.tagService.getTags(0, 100, 'libelle').subscribe((page => {
      this.tags = page.content;
      this.filterObjects('');
    }));
  }

  public compareById(f1: any, f2: any) {
    return f1 && f2 && f1.id === f2.id;
  }

  public addTagEvent(event) {
    console.log(event);
  }

  filterObjects(value: string): void {
    console.log(value);
    this.filteredObjects = this.tags.filter((tag: any) => {
      if (value) {
        return tag.libelle.toLowerCase().indexOf(value.toLowerCase()) > -1;
      } else {
        return false;
      }
    }).filter((filteredObj: any) => {
      // return this.questionnaire.tags ? this.questionnaire.tags.findIndex(item => item.id === filteredObj.id) < 0 : true;
      return true;
    });
  }
}
