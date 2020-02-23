import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {MatChipInputEvent, MatDialog, MatDialogConfig} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {NotifierService} from '@app/core/notifications/simple-notifier.service';
import {CategoryDialogComponent} from '@app/features/category/category-dialog/category-dialog.component';
import {TypeCategory} from '@app/features/category/type-category.enum';
import {Category} from '@app/features/qcm-rest-api/model/category.model';
import {Questionnaire} from '@app/features/qcm-rest-api/model/questionnaire.model';
import {Tag} from '@app/features/qcm-rest-api/model/tag.model';
import {CategoryService} from '@app/features/qcm-rest-api/services/category.service';
import {TagService} from '@app/features/qcm-rest-api/services/tag.service';
import {QuestionnaireFormBuilder} from '@app/features/questionnaire/questionnaire-form/questionnaire-form-builder';
import {QuestionStore} from '@app/features/stores/question-store.service';
import {QuestionnaireStore} from '@app/features/stores/questionnaire-store.service';
import {EditableFormComponent} from '@app/shared/material-components/editable-form/editableFormComponent';
import {MdEditorOption} from 'ngx-markdown-editor';

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.scss'], providers: [QuestionnaireFormBuilder]
})
export class QuestionnaireFormComponent extends EditableFormComponent<Questionnaire, number> implements OnInit, AfterViewInit {

  @Input()
  public questionnaire: Questionnaire;

  public categories: Category[];
  public description: string;

  public date: Date;

  public options: MdEditorOption = {
    showPreviewPanel: true,
    enablePreviewContentClick: true,
    resizable: true,
    customRender: {
      image: function (href: string, title: string, text: string) {
        let out = `<img style="max-width: 100%; border: 20px solid red;" src="${href}" alt="${text}"`;
        if (title) {
          out += ` title="${title}"`;
        }
        out += (<any>this.options).xhtml ? '/>' : '>';
        return out;
      }
    }
  };

  constructor(private route: ActivatedRoute, protected notifierService: NotifierService,
              protected router: Router, protected questionnaireStore: QuestionnaireStore,
              protected questionStore: QuestionStore, private dialog: MatDialog,
              private categoryService: CategoryService,
              private tagService: TagService, private formBuilder: QuestionnaireFormBuilder) {
    super(questionnaireStore, notifierService, router);
    this.edition = route.snapshot.params.id <= 0;
    this.route.data.subscribe(data => {
      this.questionnaire = data.questionnaire;
      this.description = this.questionnaire.description;
      this.date = new Date(this.questionnaire.dateCreation);
      this.categories = data.categories;
    });

  }

  protected createForm(): void {
    this.form = this.formBuilder.createForm(this.questionnaire);
  }

  ngOnInit(): void {
    this.createForm();
    this.toggleEdition(this.edition);
  }

  ngAfterViewInit(): void {

  }

  private loadCategories() {
    this.categoryService.getQuestionnairesCategories().subscribe((categories => {
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


  protected beforeSaveForm(q: Questionnaire): Questionnaire {
    q.description = this.description;
    return q;
  }

  protected onSaveForm(data) {
    this.questionnaire = data;
    this.form = this.formBuilder.createForm(this.questionnaire);
    this.toggleEdition(false);
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
    config.data = {category: new Category(), type: TypeCategory.QUESTIONNAIRE}
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
