import {Component, Input, OnInit} from '@angular/core';
import {Epic} from '../../../../api/model/epic.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EpicService} from '../../../../api/services/epic.service';
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
  public questionnaireForm: FormGroup;

  public epics: Epic[];

  public tags: Tag[];

  public filteredObjects: Tag[];

  constructor(private epicService: EpicService, private tagService: TagService) {
  }

  ngOnInit() {

    this.epicService.getEpics().subscribe((epics => {
      this.epics = epics;
    }));
    // this.categories = this.categorieService.getCategories();
    this.tagService.getTags().subscribe((page => {
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
