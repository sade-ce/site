import { Component, OnInit } from '@angular/core';
import { AppService } from '../../providers/app.service';
import { ActivatedRoute } from '@angular/router';
import { ModalData, ModalService } from '../../providers/modal/modal.service';


@Component({
    selector: 'session-refund-review-page',
    templateUrl: 'session-refund-review.page.html',
    styleUrls: ['session-refund-review.page.scss'],
})
export class SessionRefundReviewPage implements OnInit {

    idx;
    message = null;
    book;
    loadingRefundReject = false;
    showConfirmReject = false;

    constructor(
                public active: ActivatedRoute,
                public a: AppService,
                public modal: ModalService,
    ) {
    }

    ngOnInit() {
        this.active.queryParams.subscribe(params => {
            this.idx = params.idx;
            if (params.idx) {
                this.a.lms.get_session_refund_info({idx: params.idx}).subscribe(re => {
                    // console.log('get_session_refund_info::', re);
                    this.book = re;
                }, e => {
                    this.a.toast(e);
                });
            } else {
                this.a.toast(this.a.t('IDX SESSION MISSING'));
                if ( this.a.isStudent ) {
                    this.a.open('session-past');
                } else if ( this.a.isTeacher) {
                    this.a.open('teacher-session-past');
                } else {
                    this.a.openHome();
                }
            }
        });
    }

    onClickRefund() {

        const data: ModalData = {
            title: this.a.t('REFUND ACCEPT'),
            content: this.a.t('REFUND ACCEPT CONFIRM'),
            yes: this.a.t('YES'),
            no: this.a.t('CANCEL')
        };
        this.modal.confirm(data).subscribe( result => {
            if ( result ) {
                this.a.lms.session_refund(this.book['idx']).subscribe(re => {
                    // console.log(re);
                    this.a.open('teacher-session-past');
                    this.a.toast( this.a.t('REFUND ACCEPT SUCCESS'));
                }, e => {
                    this.a.toast(e);
                });
            }
        });

    }

    onClickRejectRefundRequest() {
        if ( this.loadingRefundReject ) {
            return;
        }

        if ( this.message ) {

            const data: ModalData = {
                title: this.a.t('REFUND REJECT'),
                content: this.a.t('REFUND REJECT CONFIRM'),
                yes: this.a.t('YES'),
                no: this.a.t('CANCEL')
            };
            this.modal.confirm(data).subscribe( result => {
                if ( result ) {
                    // console.log('this.message', this.message);
                    this.loadingRefundReject = true;
                    this.a.lms.session_refund_reject({
                        idx_reservation: this.book.idx,
                        refund_reject_message: this.message
                    }).subscribe(res => {
                        this.loadingRefundReject = false;
                        this.a.open('teacher-session-past');
                        this.a.toast( this.a.t('REFUND REJECT SUCCESS'));
                    }, e => {
                        this.a.toast(e);
                        this.loadingRefundReject = false;
                    });
                }
            });

        } else {
            this.a.toast( this.a.t('MESSAGE EMPTY'));
        }
    }

}
