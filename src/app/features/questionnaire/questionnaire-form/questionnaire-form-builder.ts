import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';
import {Questionnaire} from '@api/qcm/model/questionnaire.model';
import {Tag} from '@api/qcm/model/tag.model';


@Injectable()
export class QuestionnaireFormBuilder {
  constructor(private fb: FormBuilder) {
  }


  public createForm(questionnaire: Questionnaire): FormGroup {
    return new FormGroup({
      id: new FormControl({value: questionnaire.id, disabled: true}),
      version: new FormControl({value: questionnaire.version, disabled: true}),
      title: new FormControl({value: questionnaire.title, disabled: true}, Validators.required),
      description: new FormControl({value: questionnaire.description, disabled: true}, Validators.required),
      category: new FormControl({value: questionnaire.category, disabled: true}),
      tags: this.createTagsControl(questionnaire, true)
    });
  }

  private createTagsControl(questionnaire: Questionnaire, disabled: boolean): FormArray {
    const responseFormArray: FormArray = this.fb.array([]);
    if (questionnaire.tags) {
      questionnaire.tags.forEach((tag => {
        responseFormArray.push(this.createTagControl(tag, disabled));
      }));
    }
    return responseFormArray;
  }

  public createTagControl(tag: Tag, disabled: boolean): FormGroup {
    return this.fb.group({
      // response: 'test',
      id: new FormControl({value: tag.id ? tag.id : null, disabled: disabled}),
      libelle: new FormControl({value: tag.libelle ? tag.libelle : false, disabled: disabled}),
    });
  }


}
