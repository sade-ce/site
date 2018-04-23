import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { OntueScheduleEditPage } from './ontue-schedule-edit.page';


const routes: Routes = [
    { path: '', component: OntueScheduleEditPage }
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        OntueScheduleEditPage
    ],
    entryComponents: [
        OntueScheduleEditPage
    ],
    bootstrap: [OntueScheduleEditPage],
    schemas: []
})
export class OntueScheduleEditPageModule { }