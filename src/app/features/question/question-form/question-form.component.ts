import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material';
import {ActivatedRoute,  Router} from '@angular/router';
import {NotifierService} from '@app/core/notifications/simple-notifier.service';
import {QuestionStore} from '@app/shared/stores/question-store.service';
import {EditableFormComponent} from '@app/shared/material-components/editable-form/editableFormComponent';
import {FabToggleComponent} from '@app/shared/material-components/fab/fab-toggle/fab-toggle.component';
import {Question} from '@app/shared/qcm-rest-api/model/question.model';
import {Reponse} from '@app/shared/qcm-rest-api/model/response.model';
import {Tag} from '@app/shared/qcm-rest-api/model/tag.model';

import {QuestionFormBuilder} from './question-form-builder';


enum Status {
  DRAFT = 'Draft',
  TO_BE_VALIDATED = ' To Validate',
  VALIDATED = 'Validated'
}

enum QuestionType {
  FREE_TEXT = 'Free Text',
  MULTIPLE_CHOICE = 'Multiple Choice',
  MULTIPLE_ANSWER = 'Multiple Answer',
  TRUE_FALSE = 'True/False',
}

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'], providers: [QuestionFormBuilder]
})
export class QuestionFormComponent extends EditableFormComponent<Question> implements OnInit, AfterViewInit {

  @ViewChild('toggle', {static: true}) fabToggleComponent: FabToggleComponent;

  @Input()
  public question: Question;

  public types = [];
  public status = [];
  public good: boolean;

  constructor(protected   store: QuestionStore,
              protected   notifierService: NotifierService,
              protected   router: Router,
              private formBuilder: QuestionFormBuilder,
              private route: ActivatedRoute ) {
    super(store, notifierService, router);
    this.types = this.getQuestionTypesEnum();
    this.status = this.getStatusEnum();
    this.edition = route.snapshot.params.id <= 0 ;
    this.route.data.subscribe(data => {
      this.question = data.question;
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  ngAfterViewInit(): void {
    this.fabToggleComponent.opened = this.edition;
  }

  public addResponse() {
    const responses = this.form.get('responses') as FormArray;
    responses.push(this.formBuilder.createResponseControl(new Reponse(), false));
  }

  protected createForm(): void {
    this.form = this.formBuilder.createForm(this.question);
  }

  protected onDeleteForm(t: Question) {
    this.notifierService.notifySuccess(t.id + ' deleted', 2000);
    this.fabToggleComponent.opened = false;

    // this.router.navigate(['/questions/list']);
  }

  protected onSaveForm(data) {
    this.question = data;
    this.fabToggleComponent.opened = false;
    this.createForm();
    this.notifierService.notifySuccess(data.title, 2000);
  }

  public onSelectResponse(event) {
    if (this.form.get('type').value === 'MULTIPLE_CHOICE') {
      const responses = this.form.get('responses') as FormArray;
      for (let i = 0; 1 < responses.length; i++) {
        const response: FormGroup = responses.at(i) as FormGroup;
        response.get('good').setValue(i === event.value);
      }
    }
  }

  get responses(): FormArray {
    return this.form.get('responses') as FormArray;
  }

  public removeResponse(index) {
    const responses = this.form.get('responses') as FormArray;
    responses.removeAt(index);
  }

  get tags(): FormArray {
    return this.form.get('tags') as FormArray;
  }

  public addChip(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.addTag(value.trim());
    }
    if (input) {
      input.value = '';
    }
  }

  public removeChip(index: number): void {
    debugger
    if (index >= 0) {
      const tags = this.form.get('tags') as FormArray;
      tags.removeAt(index);
    }
  }

  public addTag(libelle: string) {
    const tags = this.form.get('tags') as FormArray;
    tags.push(this.formBuilder.createTagControl(new Tag(libelle), false));
  }

  // private getErrorMessage() {
  //   return this.questionForm.get('question').hasError('required') ? 'You must enter a value' :
  //     this.questionForm.hasError('question') ? 'Not a valid question' : '';
  // }

  private getQuestionTypesEnum(): any[] {
    const keys = Object.keys(QuestionType);
    const types = [];
    keys.map(Key => {
      console.log(`color key = ${Key}, value = ${QuestionType[Key]}`);
      const type = {'id': Key, 'name': QuestionType[Key]};
      types.push(type);
    });
    return types;
  }

  private getStatusEnum(): any[] {
    const keys = Object.keys(Status);
    const status = [];
    keys.map(Key => {
      const type = {'id': Key, 'name': Status[Key]};
      status.push(type);
    });
    return status;
  }
}
