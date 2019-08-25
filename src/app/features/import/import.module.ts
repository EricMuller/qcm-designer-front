import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaterialFileUploadComponent} from '@app/features/import/material-file-upload/material-file-upload.component';
import {QuestionnaireImportComponent} from '@app/features/import/questionnaire-import/questionnaire-import.component';
import {AngularModule} from '@app/shared/angular/angular.module';
import {MaterialComponentsModule} from '@app/shared/material-components/material-components.module';
import {MaterialModule} from '@app/shared/material/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {ImportAppComponent} from './import-app/import-app.component';

@NgModule({
  imports: [
    CommonModule,
    AngularModule,
    MaterialModule,
    MaterialComponentsModule,
    TranslateModule,
  ],
  declarations: [ImportAppComponent, QuestionnaireImportComponent, MaterialFileUploadComponent]
})
export class ImportModule {
}
