import {Injectable} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Questionnaire} from '@app/features/qcm-rest-api/model/questionnaire.model';
import {Tag} from '@app/features/qcm-rest-api/model/tag.model';


@Injectable()
export class QuestionnaireFormBuilder {
  constructor(private fb: FormBuilder) {
  }

  public createForm(questionnaire: Questionnaire): FormGroup {
    return new FormGroup({
      uuid: new FormControl({value: questionnaire.uuid, disabled: true}),
      version: new FormControl({value: questionnaire.version, disabled: true}),
      title: new FormControl({value: questionnaire.title, disabled: true}, Validators.required),
      website: new FormControl({value: questionnaire.website, disabled: true}),
      description: new FormControl({value: questionnaire.description, disabled: true}),
      category: new FormControl({value: questionnaire.category, disabled: true}),
      published: new FormControl({value: questionnaire.published, disabled: true}),
      tags: this.createTagsControl(questionnaire, true),
      dateCreation: new FormControl({value: new Date(questionnaire.dateCreation), disabled: true}),
      dateModification: new FormControl({value: new Date(questionnaire.dateModification), disabled: true}),
      status: new FormControl({value: questionnaire.status, disabled: true}, Validators.required),
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

  public createTagControl(tag: Tag, aDisabled: boolean): FormGroup {
    return this.fb.group({
      // response: 'test',
      uuid: new FormControl({value: tag.uuid ? tag.uuid : null, disabled: aDisabled}),
      libelle: new FormControl({value: tag.libelle ? tag.libelle : false, disabled: aDisabled}),
    });
  }


}
