import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TypeCategory} from '@app/features/category/type-category.enum';
import {Category} from '@app/features/qcm-rest-api/model/category.model';
import {CategoryService} from '@app/features/qcm-rest-api/services/category.service';


@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.scss']
})
export class CategoryDialogComponent implements OnInit {

  public category: Category;
  public type: TypeCategory;

  constructor(public dialogRef: MatDialogRef<CategoryDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private categoryService: CategoryService) {
    // this.category = Object.assign({}, data.category);
    this.category = data.category;
    this.type = data.type;
  }

  ngOnInit() {
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  public save() {
    if (TypeCategory.QUESTIONNAIRE === this.type) {
      this.categoryService.postQuestionsnaireCategory(this.category).subscribe(
        (q) => {
          this.dialogRef.close(q);
        }
      );
    } else {
      this.categoryService.postQuestionsCategory(this.category).subscribe(
        (q) => {
          this.dialogRef.close(q);
        }
      );
    }
  }

}
