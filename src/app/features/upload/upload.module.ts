import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UploadStore} from '@app/features/stores/upload-store.service';
import {MaterialFileUploadComponent} from '@app/features/upload/material-file-upload/material-file-upload.component';
import {UploadListComponent} from '@app/features/upload/upload-list/upload-list.component';
import {AngularModule} from '@app/shared/angular/angular.module';
import {MaterialComponentsModule} from '@app/shared/material-components/material-components.module';
import {MaterialModule} from '@app/shared/material/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {ImportAppComponent} from './import-app/import-app.component';
import {UploadFormComponent} from './upload-form/upload-form.component';
import {UploadNavListComponent} from './upload-list/upload-nav-list/upload-nav-list.component';

@NgModule({
  imports: [
    CommonModule,
    AngularModule,
    MaterialModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    TranslateModule.forChild()
  ],
  declarations: [ImportAppComponent, UploadListComponent, MaterialFileUploadComponent, UploadNavListComponent, UploadFormComponent],
  providers: [UploadStore]
})
export class UploadModule {
}
