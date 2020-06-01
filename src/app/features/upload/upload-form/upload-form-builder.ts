import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Upload} from '@app/features/qcm-rest-api/model/upload.model';


@Injectable()
export class UploadFormBuilder {

  constructor(private fb: FormBuilder) {
  }

  public createForm(upload: Upload): FormGroup {
    return this.fb.group({
      id: new FormControl({value: upload.id, disabled: true}),
      version: new FormControl({value: upload.version, disabled: true}),

      status: new FormControl({value: upload.status, disabled: true}, Validators.required),
      category: new FormControl({value: upload.category, disabled: true}),

      dateCreation: new FormControl({value: new Date(upload.dateCreation), disabled: true}),
      dateModification: new FormControl({value: new Date(upload.dateModification), disabled: true})
    });
  }


}
