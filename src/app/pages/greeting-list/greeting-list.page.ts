import { Component, OnInit } from '@angular/core';
import { AppService } from '../../providers/app.service';
import { MessageSendModalService } from '../../providers/message-send-modal/message-send-modal.service';
import { GREETINGS } from '../../modules/xapi/interfaces';

@Component({
    selector: 'greeting-list-page',
    templateUrl: 'greeting-list.page.html',
    styleUrls: ['greeting-list.page.scss']
})
export class GreetingListPage implements OnInit {
    greetings: GREETINGS = null;

    pageOption = {
        limitPerPage: 10,
        currentPage: 1,
        limitPerNavigation: 4,
        totalRecord: 0
    };

    showLoader = false;

    constructor(
        public a: AppService,
        public messageSend: MessageSendModalService
    ) {

        this.loadGreetings();
    }

    loadGreetings() {
        this.showLoader = true;
        this.a.lms.get_greetings({
            limit: this.pageOption['limitPerPage'],
            page: this.pageOption['currentPage']
        }).subscribe( res => {
            // console.log('greetings:: ', res);
            if (res) {
                this.pageOption.currentPage = res['page'];
                this.pageOption.limitPerPage = res['limit'];
                this.pageOption.totalRecord = res['total'];
                this.greetings = res['greetings'];
            }
            this.showLoader = false;
        }, e => {
            this.a.toast(e);
            this.showLoader = false;
        });
    }


    ngOnInit() { }

    onPageClick($event) {
        this.pageOption['currentPage'] = $event;
        this.loadGreetings();
    }

}



