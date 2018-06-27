import {Component, Input, OnInit} from '@angular/core';
import {QuestionnaireStore} from '../../stores/questionnaire-store.service';
import {FormArray, FormGroup} from '@angular/forms';
import {Questionnaire} from '../../../api/qcm/model/questionnaire.model';
import {MatChipInputEvent, MatDialog, MatDialogConfig} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../../api/qcm/model/category.model';
import {NotifierService} from '../../../core/simple-notifier.service';
import {TagService} from '../../../api/qcm/services/tag.service';
import {CategoryService} from '../../../api/qcm/services/category.service';
import {TdDialogService} from '@covalent/core';
import {EditableFormComponent} from '../../shared/forms/editable-form/editableFormComponent';
import {QuestionnaireFormBuilder} from './questionnaire-form-builder';
import {CategoryDialogComponent} from '../../category/category-dialog/category-dialog.component';
import {QuestionStore} from '../../stores/question-store.service';
import {Tag} from '../../../api/qcm/model/tag.model';


@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.scss'], providers: [TdDialogService, QuestionnaireFormBuilder]
})
export class QuestionnaireFormComponent extends EditableFormComponent<Questionnaire> implements OnInit {

  @Input()
  public questionnaire: Questionnaire;

  public categories: Category[];

  constructor(
    private route: ActivatedRoute,
    protected notifierService: NotifierService,
    protected router: Router,
    protected questionnaireStore: QuestionnaireStore,
    protected questionStore: QuestionStore,
    private dialog: MatDialog,
    private categoryService: CategoryService, private tagService: TagService,
    private formBuilder: QuestionnaireFormBuilder) {
    super(questionnaireStore, notifierService, router);
  }

  protected createForm(): FormGroup {
    return this.formBuilder.createForm(this.questionnaire);
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (!this.questionnaire.id) {
      this.fabMenu.opened = true;
    }
    this.loadCategories();
    //
    // this.tagService.getTags(0, 100, 'libelle').subscribe((page => {
    //   this.tags = page.content;
    // }));
  }

  private loadCategories() {
    this.categoryService.getCategories().subscribe((categories => {
      this.categories = categories;
    }));
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

  public compareById(f1: any, f2: any) {
    return f1 && f2 && f1.id === f2.id;
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

  protected onSaveForm(data) {
    this.questionnaire = data;
    this.fabMenu.opened = false;
    this.notifierService.notifySuccess(data.title, 2000);
  }

  protected onDeleteForm(t: Questionnaire) {
    this.notifierService.notifySuccess(t.title + ' deleted', 2000);
    this.router.navigate(['/questionnaires/list']);
  }

  public createCategory() {
    this.openCategoryDialog();
  }

  public viewQuestionsByQuestionnaire() {
    // this.openCategoryDialog();
    // this.questionnaireStore.unSelectAllElement();
    this.questionnaireStore.selectElement(this.questionnaire, true);
    this.router.navigate(['/questions/list']);
  }

  public nbSelectedQuestion(): number {
    return this.questionStore.selectedSize();
  }

  public add(): void {


  }

  public openCategoryDialog() {
    const config = new MatDialogConfig();
    config.data = {category: new Category()}
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

}
