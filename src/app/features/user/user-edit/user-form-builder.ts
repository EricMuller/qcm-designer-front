import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {User} from '@app/core/auth/user.model';


@Injectable()
export class UserFormBuilder {

  constructor(private fb: FormBuilder) {
  }

  public createForm(user: User): FormGroup {
    return this.fb.group({
      uuid: new FormControl({value: user.uuid, disabled: true}),
      version: new FormControl({value: user.version ? user.version : '' , disabled: true}),
      userName: new FormControl({value: user.userName  ? user.userName : '', disabled: true}),
      firstName: new FormControl({value: user.firstName ? user.firstName : '', disabled: true}),
      lastName: new FormControl({value: user.lastName ? user.lastName : '', disabled: true}),
      email: new FormControl({value: user.email, disabled: true}),
      company: new FormControl({value: user.company ? user.company : '', disabled: true}),
    });
  }

}
