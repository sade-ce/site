import { Component } from '@angular/core';
import { AppService } from '../../../../providers/app.service';


@Component({
    selector: 'katalkenglish-payment-history-page',
    templateUrl: 'katalkenglish-payment-history.page.html',
    styleUrls: ['katalkenglish-payment-history.page.scss']
})
export class KatalkEnglishPaymentHistoryPage {

    payments = [];
    showLoader = true;
    constructor(
        public a: AppService
    ) {

        if ( this.a.isLogout ) {
            this.a.open('login');
            this.a.toast( this.a.t('YOU ARE NOT LOGGED IN'));
            return;
        }
        this.showLoader = true;
        this.a.lms.get_payment_history().subscribe( res => {
            // console.log(`get_payment_history`, res['payments']);

            this.showLoader = false;
            this.payments = res['payments'];
            // if ( this.payments[0] ) this.onClickPrintPreview(this.payments[0]);
          }, e => {
            this.a.toast(e);
            this.showLoader = false;
          });
    }
}




