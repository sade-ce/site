import { NgModule } from '@angular/core';
import { KatalkEnglishPaymentHistoryPage } from './katalkenglish-payment-history.page';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { TranslatePipeModule } from '../../../../pipes/translate/translate.pipe.module';
import { MaterialModule } from '../../../../app.material.module';


const appRoutes: Array<Route> = [
    { component: KatalkEnglishPaymentHistoryPage, path: '' }
];
@NgModule({
    declarations: [
        KatalkEnglishPaymentHistoryPage
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes),
        TranslatePipeModule,
        MaterialModule
    ],
    entryComponents: [
        KatalkEnglishPaymentHistoryPage
    ],
    bootstrap: [KatalkEnglishPaymentHistoryPage]
})
export class KatalkEnglishPaymentHistoryPageModule { }

