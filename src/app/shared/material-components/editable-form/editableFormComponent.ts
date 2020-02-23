import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {NotifierService} from '@app/core/notifications/simple-notifier.service';
import {CrudStore} from '@app/features/stores/store-api';

export abstract class EditableFormComponent<T, K> implements OnInit {

  public edition: boolean;

  public addOnBlur = true;

  public form: FormGroup;

  public separatorKeysCodes = [ENTER, COMMA];

  protected constructor(protected store: CrudStore<T, K>, protected  notifierService: NotifierService, protected router: Router) {

  }

  ngOnInit() {

  }

  public validateAllFormFields(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else if (control instanceof FormArray) {
        this.validateAllFormFields(control);
      }
    });
  }

  public toggleEdition(event: boolean) {

    if (event) {
      this.form.enable();
      this.notifierService.notifyInfo('Mode edition', 1000);
    } else {
      this.form.disable();
    }
    this.edition = event;

  }

  protected beforeSaveForm(t: T): T {
    return t;
  }

  public saveForm() {
    // debugger
    if (this.form.valid) {
      let q = this.form.value;
      q = this.beforeSaveForm(q);
      this.store.saveElement(q)
        .subscribe(this.onSaveForm.bind(this)
        );
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  public deleteForm() {
    this.store.deleteElement(this.form.value)
      .subscribe(this.onDeleteForm.bind(this));
  }

  protected abstract createForm(): void;

  protected abstract onSaveForm(t: T) ;

  protected abstract onDeleteForm(t: T) ;


  // onChanges(): void {
  //   this.questionForm.valueChanges.subscribe(val => {
  //     console.log(val);
  //   });
  // }
}
