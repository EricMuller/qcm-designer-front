import {OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {FabMenuComponent} from '../fab/fab-menu.component';
import {NotifierService} from '../../../../core/simple-notifier.service';
import {Router} from '@angular/router';
import {DataStore} from '../../stores/store-api';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


export abstract class EditableFormComponent<T> implements OnInit {

  @ViewChild(FabMenuComponent) fabMenu: FabMenuComponent;

  public edition: Boolean;
  public addOnBlur = true;

  public form: FormGroup;

  public separatorKeysCodes = [ENTER, COMMA];

  protected constructor(protected store: DataStore<T>, protected  notifierService: NotifierService, protected router: Router) {
  }

  ngOnInit() {
    this.form = this.createForm();
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
    } else {
      this.form.disable();
    }
    this.edition = event;

  }

  public saveForm() {
    if (this.form.valid) {
      const q = this.form.value;
      this.store.saveElement(q).subscribe(this.onSaveForm.bind(this));
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  public deleteForm() {
    this.store.deleteElement(this.form.value).subscribe(this.onDeleteForm.bind(this));
  }

  protected abstract createForm(): FormGroup ;

  protected abstract onSaveForm(t: T) ;

  protected abstract onDeleteForm(t: T) ;

  // onChanges(): void {
  //   this.questionForm.valueChanges.subscribe(val => {
  //     console.log(val);
  //   });
  // }
}
