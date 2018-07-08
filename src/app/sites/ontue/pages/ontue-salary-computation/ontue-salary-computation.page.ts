import { Component } from '@angular/core';
import { AppService } from '../../../../providers/app.service';
import { ActivatedRoute } from '@angular/router';

export interface PAYMENT_COMPUTATION_INFORMATION {
    NEW_EXCHANGE_SELLER_RATE: number;
    gcash_transaction: number;
    teacher_share: number;
    transaction_fee_paypal: number;
    transaction_fee_teacher_share: number;
    transaction_fee_branch_share: number;
    transaction_fee_office_share: number;
    php: string;
    usd: string;
    WU: { any };
}
@Component({
    selector: 'ontue-salary-computation-page',
    templateUrl: 'ontue-salary-computation.page.html',
    styleUrls: ['ontue-salary-computation.page.scss']
})

export class OntueSalaryComputationPage {

    loading = false;
    payment_information = {
        payment_method: 'paypal'
    };
    payment_computation: PAYMENT_COMPUTATION_INFORMATION = <PAYMENT_COMPUTATION_INFORMATION>{
        teacher_share: 0,
    };


    total_points = 0;
    teacher_share = 0;
    paypal_charges = 0;
    selling_rate = 0;
    earnings = 0;
    salary = '0';

    constructor(public a: AppService,
                private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {

            if (params.total_points) {
                this.total_points = params.total_points;
            }
        });

        this.a.lms.get_payment_computation_info().subscribe(re => {
            // console.log('get_payment_computation_info', re);
            this.payment_computation = re;
            this.recompute();
        }, e => {
            this.a.toast(e);
        });

    }

    recompute() {
        this.teacher_share = this.total_points * this.payment_computation.teacher_share / 100;
        this.paypal_charges = this.teacher_share * this.payment_computation.transaction_fee_teacher_share / 100;
        if (this.payment_information['payment_method'] !== 'paypal') {
            // console.log('this.payment_information[payment_method]', this.payment_information['payment_method']);
            this.selling_rate = this.teacher_share * this.payment_computation.NEW_EXCHANGE_SELLER_RATE / 100;
            this.earnings = Math.round(this.teacher_share - this.paypal_charges - this.selling_rate);
        } else {
            this.earnings = Math.round(this.teacher_share - this.paypal_charges);
        }
        if (this.payment_information['payment_method'] === 'paypal') {
            console.log('earnings', this.earnings);
            console.log('usd_exchange_rate', this.payment_computation);

            this.salary = Math.round(this.earnings / parseFloat(this.payment_computation['usd'])) + 'USD';
        } else {
            const converted = Math.round(this.earnings / parseFloat(this.payment_computation['php']));
            this.salary = converted + 'PHP';
        }
    }
}

