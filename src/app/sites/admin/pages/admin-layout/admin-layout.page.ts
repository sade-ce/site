import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../providers/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'admin-layout-page',
    templateUrl: 'admin-layout.page.html',
    styleUrls: ['admin-layout.page.scss']
})

export class AdminLayoutPage implements OnInit {
    constructor(
        public activated: ActivatedRoute,
        public a: AppService
    ) {
        console.log('AdminLayoutPage::construction()');

        activated.queryParamMap.subscribe(params => {
            if (params.get('session_id')) {
                const session_id = params.get('session_id');
                console.log('session_id: ', session_id);
                console.log('user email: ', this.a.user.email);
                this.a.user.loadProfile( session_id ).subscribe( re => {
                    console.log('user logged in as email: ', this.a.user.email);
                }, e => this.a.toast(e));
            } else {
                if (a.isLogout) {
                    this.a.toast('Please login first');
                    this.a.open('/manager/login');
                }
            }
        });
    }

    ngOnInit() { }
}



