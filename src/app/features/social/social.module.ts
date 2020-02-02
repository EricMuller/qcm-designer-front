import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
// import { ChartsModule } from 'ng2-charts/ng2-charts';
// import {EditComponent} from '@app/features/user/edit/edit.component';
// import {PrimerComponentsModule} from '@app/features/primer/primer.module';
import {SocialComponent} from '@app/features/social/social.component';
import {AngularModule} from '@app/shared/angular/angular.module';
import {MaterialModule} from '@app/shared/material/material.module';

// import {NgxDatatableModule} from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule,
    AngularModule,
    MaterialModule
    // NgxDatatableModule,
    // PrimerComponentsModule,
    // ChartsModule,
  ],
  declarations: [
    SocialComponent,
    // EditComponent,
  ]

})
export class SocialModule {
}
