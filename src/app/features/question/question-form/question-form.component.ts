import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {MatChipInputEvent, MatDialog, MatDialogConfig} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {SetCurrentQuestionAction} from '@app/app/state/set-current-question-action';
import {SetCurrentQuestionnaireAction} from '@app/app/state/set-current-questionnaire-action';
import {QuestionnaireModel} from '@app/app/state/questionnaire-model';
import {AppState} from '@app/app/state/app-state.service';
import {NotifierService} from '@app/core/notifications/simple-notifier.service';
import {CategoryDialogComponent} from '@app/features/category/category-dialog/category-dialog.component';
import {Category} from '@app/features/qcm-rest-api/model/category.model';
import {Question} from '@app/features/qcm-rest-api/model/question.model';
import {Reponse} from '@app/features/qcm-rest-api/model/response.model';
import {Tag} from '@app/features/qcm-rest-api/model/tag.model';
import {CategoryService} from '@app/features/qcm-rest-api/services/category.service';
import {CategoryType} from '@app/features/qcm-rest-api/services/type.enum';
import {QuestionListStore} from '@app/features/stores/question-list-store.service';

import {EditableFormComponent} from '@app/shared/material-components/editable-form/editableFormComponent';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs/internal/Observable';

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
export class QuestionFormComponent extends EditableFormComponent<Question, string> implements OnInit, AfterViewInit {


  @Input()
  public question: Question;
  public categories: Category[];

  public types = [];
  public status = [];
  public good: boolean;

  @Select(AppState.currentQuestionnaire) public currentQuestionnaire$: Observable<QuestionnaireModel>;

  constructor(protected   crudStore: QuestionListStore,
              protected   notifierService: NotifierService,
              protected   router: Router,
              private formBuilder: QuestionFormBuilder,
              private route: ActivatedRoute,
              private categoryService: CategoryService,
              private dialog: MatDialog, private store: Store) {
    super(crudStore, notifierService, router);
    this.types = this.getQuestionTypesEnum();
    this.status = this.getStatusEnum();
    this.edition = route.snapshot.params.uuid <= 0;
    this.route.data.subscribe(data => {
      this.question = data.question;
      this.categories = data.categories;
      this.store.dispatch(new SetCurrentQuestionAction({uuid: this.question.uuid, title: this.question.type}));
    });
   //  this.currentQuestionnaire$ = this.store.select(state => state.currentQuestionnaire);

  }

  ngOnInit(): void {
    this.createForm();
    this.toggleEdition(this.edition);
  }

  ngAfterViewInit(): void {
  }

  private loadCategories() {
    this.categoryService.getCategories(CategoryType.QUESTION)
      .subscribe((categories => {
        this.categories = categories;
      }));
  }

  public addResponse() {
    const responses = this.form.get('responses') as FormArray;
    responses.push(this.formBuilder.createResponseControl(new Reponse(), false));
  }

  protected createForm(): void {
    this.form = this.formBuilder.createForm(this.question);
  }

  protected onDeleteForm(t: Question) {
    this.notifierService.notifySuccess(t.uuid + ' deleted', 2000);
    this.router.navigate(['/questions/list']);
  }

  protected onSaveForm(data) {
    this.toggleEdition(false);
    this.question = data;
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
  //     this.questionForm.hasError('question') ? 'Not a valid item' : '';
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

  public createCategory() {
    this.openCategoryDialog();
  }

  public openCategoryDialog() {
    const config = new MatDialogConfig();
    config.data = {category: new Category(CategoryType[CategoryType.QUESTION])}
    config.panelClass = 'my-full-screen-dialog';
    const dialogRef = this.dialog.open(CategoryDialogComponent, config);
    dialogRef.afterClosed().subscribe(q => {
      if (q) {
        this.loadCategories();
        // const itemIndex = this._questionnaires.findIndex(item => item.id === q.id);
        // if (itemIndex === -1) {
        //   this._questionnaires.push(q);
        // } else {
        //   this._questionnaires[itemIndex] = q;
        // }
        // this.scrollIntoView('questionnaireId_' + q.id.toString());
      }
    });
  }

  public compareById(f1: any, f2: any) {
    return f1 && f2 && f1.id === f2.id;
  }

  public compareByUuid(f1: any, f2: any) {
    return f1 && f2 && f1.uuid === f2.uuid;
  }

}
