
import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../providers/app.service';
import { MYPAGE } from '../../modules/xapi/lms.service';
import { TEACHER_LIST_INFO } from '../../modules/xapi/interfaces';
import { MessageSendModalService } from '../../providers/message-send-modal/message-send-modal.service';
import { ModalData, ModalService } from '../../providers/modal/modal.service';


@Component({
    selector: 'my-page-page',
    templateUrl: 'my-page.page.html',
    styleUrls: ['my-page.page.scss'],
})
export class MyPagePage implements OnInit {

    loader = {
        mypage: false,
        greeting: false,
        auction: false,
        deleteApplication: false
    };
    show = {
        auction: false,
        greetingSaved: false,
        auctionSaved: false
    };
    mypage: MYPAGE = <any>{
    };
    teachers: Array<TEACHER_LIST_INFO> = [];

    constructor(
        public a: AppService,
        public messageSend: MessageSendModalService,
        public modal: ModalService
    ) {
        // console.log(`NotFoundPage::constructor()`);

        this.mypage.auction = this.defaultAuction;

        this.loader.mypage = true;
        a.lms.mypage().subscribe(re => {
            // console.log('mypage: ', re);
            this.loader.mypage = false;
            this.mypage = re;
            // console.log('mypage: ', this.mypage);
            if (this.mypage.auction && this.mypage.auction.duration && parseInt(<any>this.mypage.auction.duration, 10)) {
                this.show.auction = true;
            }
            // console.log('mypage:after:load ', this.mypage);
        }, e => a.toast(e));

        this.loadTeachers();
    }

    ngOnInit() {

    }

    get defaultAuction() {
        return {
            sunday: false,
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            hour: 0,
            minute: 0,
            duration: 0,
            point: 0,
            comment: '',
            auction: {}
        };
    }

    loadTeachers() {
        const opt = {
            search: 'recommended',
            page_no: 1,
            limit: 100
        };
        this.a.lms.teacher_list(opt).subscribe(re => {
            this.teachers = re.teachers;
        }, () => { });
    }

    onSubmitGreeting(event: Event) {
        event.preventDefault();
        if (this.loader.greeting) {
            return;
        }
        this.loader.greeting = true;
        this.a.lms.greeting_update(this.mypage.greeting).subscribe(re => {
            // console.log('re: ', re);
            this.loader.greeting = false;
            this.show.greetingSaved = true;
            setTimeout(() => this.show.greetingSaved = false, 5000);
        }, e => {
            this.a.toast(e);
            this.loader.greeting = false;
        });

        return false;
    }
    onSubmitAuction(event: Event) {
        event.preventDefault();
        if ( this.loader.auction ) {
            return;
        }
        this.loader.auction = true;
        this.a.lms.auction_update(this.mypage.auction).subscribe(re => {
            // console.log('re: ', re);
            this.loader.auction = false;
            this.show.auctionSaved = true;
            setTimeout(() => this.show.auctionSaved = false, 5000);
        }, e => {
            this.a.toast(e);
            this.loader.auction = false;
        });
        return false;
    }
    onDeleteAuction() {
        if ( this.loader.auction ) {
            return;
        }

        const data: ModalData = {
            title: this.a.t('AUCTION_DELETE'),
            content: this.a.t('AUCTION_DELETE_CONFIRM'),
            yes: this.a.t('YES'),
            no: this.a.t('CANCEL')
        };
        this.modal.confirm(data).subscribe(result => {
            if (result) {
                this.loader.auction = true;
                this.a.lms.auction_delete().subscribe(re => {
                    // console.log('re: ', re);
                    this.loader.auction = false;
                    this.mypage.auction = this.defaultAuction;
                    this.show.auction = false;
                }, e => {
                    this.a.toast(e);
                    this.loader.auction = false;
                });
            }
        });

    }
    onDeleteApplication(application) {
        if ( this.loader.deleteApplication ) {
            return;
        }
        const data: ModalData = {
            title: this.a.t('AUCTION_APPLICATION_DELETE'),
            content: this.a.t('AUCTION_APPLICATION_DELETE_CONFIRM'),
            yes: this.a.t('YES'),
            no: this.a.t('CANCEL')
        };
        this.modal.confirm(data).subscribe(result => {
            if (result) {
                this.loader.deleteApplication = true;
                this.a.lms.auction_application_delete(application.idx).subscribe(res => {
                    // console.log('auction aplication dleete; ', res);
                    const i = this.mypage.auction_application_list.findIndex(v => v.idx === application.idx);
                    if (i !== -1) {
                        this.mypage.auction_application_list.splice(i, 1);
                    }
                    this.loader.deleteApplication = false;
                }, e => {
                    this.a.toast(e);
                    this.loader.deleteApplication = false;
                });
            } else {
                application['delete'] = false;
            }
        });

    }
}

