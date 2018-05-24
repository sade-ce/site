import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../../../../app.material.module';

import { OntueReminderComponent } from './ontue-reminder.component';
import { TranslatePipeModule } from '../../../../pipes/translate/translate.pipe.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    MaterialModule,
    TranslatePipeModule
  ],
  declarations: [
      OntueReminderComponent
  ],
  exports: [
    RouterModule,
    OntueReminderComponent
  ],
  schemas: []
})
export class OntueReminderComponentModule { }

