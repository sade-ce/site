import { Component, Input } from '@angular/core';
import { AppService } from '../../../../providers/app.service';

@Component({
    selector: 'ontue-student-auction-list-component',
    templateUrl: 'ontue-student-auction-list.component.html',
    styleUrls: ['ontue-student-auction-list.component.scss'],
})
export class OntueStudentAuctionListComponent {

    auctions = null;

    days = [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ];
    shortDays = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

    constructor(public a: AppService) {


        let offset = new Date().getTimezoneOffset();
        offset = (offset / 60) * -1;
        a.lms.get_auctions(offset).subscribe( res => {
            console.log('get_auctions: ', res);
            if (res) {
                this.auctions = res;
            }
        }, e => this.a.toast(e));


    }


    showDateSelected( auction ) {
        // console.log(auction);

        const countDays = this.countDays(auction);
        // console.log(countDays);
        if ( countDays === 7) {
            return 'day';
        } else if ( countDays === 5 && !auction['sunday'] && !auction['saturday'] ) {
            return 'M~F';
        } else if (countDays === 3 && auction['monday'] && auction['wednesday'] && auction['friday']) {
            return 'MWF';
        } else if (countDays === 2 && auction['tuesday'] && auction['thursday']) {
            return 'T,TH';
        } else if (countDays === 1) {
            let day = '';
            this.days.forEach( (v, i) => {
                if (auction[v] && auction[v] === 'Y') {
                    day = this.days[i];
                }
            });
            return day;
        } else {
            const d = [];
            this.days.forEach( (v, i) => {
                if ( auction[v] && auction[v] === 'Y'  ) {
                    d.push(this.days[i]);
                }
            });
            return d.join(',');
        }
    }

    countDays(auction) {
        let cnt = 0;
        this.days.forEach( v => {
            if ( auction[v] && auction[v] === 'Y'  ) {
                cnt++;
            }
        });
        return cnt;
    }

}



