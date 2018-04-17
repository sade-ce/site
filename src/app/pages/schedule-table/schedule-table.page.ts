
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../providers/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SCHEDULE_TABLE, N, TEACHER, SCHEDULE_COMPRESSED, TABLE } from '../../modules/xapi/interfaces';
import { SESSION } from '../../modules/xapi/lms.service';


@Component({
    selector: 'schedule-table-page',
    templateUrl: 'schedule-table.page.html',
    styleUrls: ['schedule-table.page.scss'],
})
export class ScheduleTablePage implements OnInit {

    N = N;
    re: SCHEDULE_TABLE;
    params: any;
    limit = 60; // default should be 100 or more numbers NOT to scroll. Instead, put a option button to show all teachers.
    noMoreTeachers: boolean;


    myPoint = 0;

    defaultPhotoUrl;
    constructor(
        public router: Router,
        public active: ActivatedRoute,
        public a: AppService
    ) {


        this.defaultPhotoUrl = a.urlBackend + '/wp-content/plugins/xapi-2/lms/img/default-teacher-photo.jpg';
        // a.showHeader = false;
        this.active.queryParams.subscribe(params => {
            console.log('params:', params);
            this.params = params;
            const options = {};
            if (params['idx_teacher']) {
                options['teachers'] = [params['idx_teacher']];
            }
            this.loadScheduleaAndDisplay(options);
        });



    }

    ngOnInit() {

    }

    /**
     * Load and display schedule table.
     * @param options options
     *
     * @todo
     *      - translate timezone into their country language.
     *      - log `activity log` into firebase.
     */
    loadScheduleaAndDisplay(options) {
        this.a.loadSchedule(options, re => {
            console.log('re: ', re);
            if ( this.isSingleTeacher ) {
                this.re = re;
            } else {
                const table: TABLE = re.table;
                re.table = [];
                this.re = re;
                this.re.table.push(table.shift());
                this.dispalyRows(table);
            }
        });
    }
    dispalyRows(table) {
        if (table && table.length) {
            setTimeout(() => {
                this.re.table.push(table.shift());
                if ( table && table.length ) {
                    this.re.table.push(table.shift());
                }
                this.dispalyRows(table);
            }, 100);
        }
    }

    /**
     * Returns true if this schedule table display is for a single teacher.
     */
    get isSingleTeacher() {
        return !!this.params['idx_teacher'];
    }
    get isAllTeacher() {
        return !this.isSingleTeacher;
    }

    onClickNavigate(navigate) {
        this.loadScheduleaAndDisplay({ navigate: navigate });
    }


    /**
     * Returns teacher information from session information.
     *
     * `session` has `idx_schedule` and `schedule` has `idx_schedule` AND `idx_teacher`.
     * it looks up teacher information with `idx_teacher`.
     *
     * @param session session of the reservation table
     */
    teacher(session = null): TEACHER {
        if (session == null) {
            return null;
        }
        if (session[this.N.idx_schedule] === void 0) {
            return null;
        }

        /**
         * Check if the idx_schedule exist sin schedule list.
         */
        if (this.re.schedule[session[this.N.idx_schedule]] === void 0) {
            // console.log('schedule NOT found with ' + session[this.N.idx_schedule]);
            return null;
        }
        const schedule = this.re.schedule[session[this.N.idx_schedule]];
        // console.log('session: ', session);
        // console.log('schedule: ', schedule);
        if (schedule[this.N.idx_teacher] === void 0) { // Schedule is found. But no value in idx_teacher ?
            return null;
        }

        // console.log("tl: ", this.teachers.length );
        // if ( this.teachers.length == 0 ) return null;
        const idx_teacher = schedule[this.N.idx_teacher];           // Got idx_teacher now !!
        // console.log('idx_schedule: ', session.idx_schedule);
        // console.log('idx_teacher: ', idx_teacher);

        /**
         * Check if teacher exists in teacher list.
         */
        if (this.re.teachers[idx_teacher] === void 0) {                // No teacher exists?
            // console.log('no teacher? of ' + idx_teacher);
            return null;
        }
        /**
         * Return teacher informaton.
         */
        return this.re.teachers[idx_teacher];
    }


    /**
     * Returns a teacher's photo URL.
     * @param sessions sessions. A row of a schedule table.
     */
    teacher_photoURL(sessions: Array<SESSION> = null): string {
        // console.log(`session: `, sessions);
        let session;
        if (sessions) {
            session = sessions[0];
        } else {
            session = null;
        }
        const teacher = this.teacher(session);
        // console.log(teacher);
        if (teacher) {
            if (teacher.photoURL !== void 0) {
                return teacher.photoURL;
            } else {
                return this.defaultPhotoUrl;
            }
        } else {
            /**
             * If schedule display is for single teacher.
             */
            return this.re.teacher.photoURL;
        }
    }


    schedule(idx_schedule): SCHEDULE_COMPRESSED {
        if (typeof idx_schedule !== 'number' && typeof idx_schedule !== 'string') { // get idx schedule from session[0]
            idx_schedule = idx_schedule[this.N.idx_schedule]; // idx_schedule is session;
        }
        if (this.re.schedule && this.re.schedule[idx_schedule]) {
            return this.re.schedule[idx_schedule];
        } else {
            return null;
        }
    }

    session_time(sessions) {
        if (!sessions || !sessions.length) {
            return 0;
        }
        const session = sessions[0];
        if (session[this.N.idx_schedule] === void 0) {
            return 0;
        }
        const schedule = this.schedule(session[this.N.idx_schedule]);
        if (!schedule) {
            return 0;
        }
        const begin = schedule[this.N.user_time_class_begin];
        const hour = begin.substr(0, 2);
        const minute = begin.substr(2, 2);
        return hour + ':' + minute;
    }
    session_duration(sessions) {

        if (!sessions || !sessions.length) {
            return 0;
        }
        const session = sessions[0];
        if (session[this.N.idx_schedule] === void 0) {
            return 0;
        }
        const schedule = this.schedule(session[this.N.idx_schedule]);
        if (!schedule) {
            return 0;
        }
        return schedule[this.N.duration];

    }

    /**
     * Returns teacher name after sanitizing ( shorten )
     * @param session a session
     */
    teacher_name(sessions: Array<any> = null): string {
        let name = 'No Name';
        if (!sessions || !sessions.length) {
            return null;
        }
        const session = sessions[0];
        // console.log(session);
        const teacher = this.teacher(session);
        // console.log('teacher: ', teacher);
        if (teacher) {
            name = teacher.name;
        } else {
            name = this.re.teacher['name'];
        }
        // return name;

        return this.a.preTeacherName(name, 7, '...');
    }


    onClickSession(session: SESSION) {

        // console.log('onClickSession', session);
        if (session['in_progress'] === true) {
            // console.log("It is reserving/cancelling... return");
            return;
        }

        if (session[N.status] === N.session_past) {
            return;
        }
        if (session[N.open] === N.session_open) {
            this.reserveSession(session);
        } else if (session[N.open] === N.session_reserved && session[N.owner] === 'me') {
            this.cancelSession(session);
        }
    }

    updatePoint() {

        if (this.a.user.isLogin) {
            this.a.loadMyPoint(p => {
                this.myPoint = p;
                // this.cdr.detectChanges();
            });

        }
    }


    reserveSession(session: SESSION) {

        // console.log("reserve: session: ", session);
        // const schedule = this.schedule(session[ this.IDX_SCHEDULE ]);
        // console.log("reserve: schedule: ", schedule);

        session['in_progress'] = true;
        this.a.lms.session_reserve({ idx_schedule: session[N.idx_schedule], date: session[N.date] }).subscribe(re => {
            // console.log("class_reserve: ", re);

            // setTimeout(() => session['in_progress'] = false, 500);
            session['in_progress'] = false;

            session[N.open] = N.session_reserved;
            session[N.dayoff] = '';
            session[N.status] = N.session_future;
            session[N.owner] = 'me';
            session[N.student_name] = re.student_name;
            session[N.point] = re.point;
            session[N.idx_reservation] = re.idx_reservation;
            this.a.updateLmsInfoUserNoOfTotalSessions(re['no_of_total_sessions']);
            this.a.updateLmsInfoUserNoOfReservation(re['no_of_reservation']);
            this.updatePoint();
            this.a.onLmsReserve(this.teacher_name([session]));
        }, e => {
            session['in_progress'] = false;
            this.a.toast(e);
        });

    }

    cancelSession(session: SESSION) {
        session['in_progress'] = true;
        // console.log("Going to cancel with : ", session[ this.IDX_RESERVATION ]);
        this.a.lms.session_cancel(session[N.idx_reservation]).subscribe(re => {
            // console.log("cancel success", re);
            session['in_progress'] = false;
            session[N.status] = N.session_future;
            session[N.open] = N.session_open;
            session[N.owner] = '';
            session[N.student_name] = '';
            session[N.point] = this.schedule(session[N.idx_schedule])[N.point];
            this.a.updateLmsInfoUserNoOfTotalSessions(re['no_of_total_sessions']);
            this.a.updateLmsInfoUserNoOfReservation(re['no_of_reservation']);
            this.updatePoint();
            this.a.onLmsCancel(this.teacher_name([session]));
        }, e => {
            session['in_progress'] = false;
            this.a.toast(e);
        });
    }


    icon(session: SESSION) {
        if (session[N.status] === N.session_future) {
            if (session[N.open] === N.session_open) { // open to reserve
                if (session[N.dayoff] === 'dayoff') {
                    return 'cloud-circle'; // but day off
                }
                if (session[N.prere]) {
                    return 'heart';
                } else {
                    return 'radio-button-off'; // reservable
                }
            } else if (session[N.open] === N.session_reserved) { // already reserved.
                if (session[N.owner] === 'me' && !session[N.dayoff]) {
                    return 'radio-button-on';
                } else if (session[N.dayoff] === 'dayoff') {
                    return 'cloud-done'; // already reserved and day-off
                } else {
                    return 'checkmark'; // reserved
                }
            } else if (session[N.open] === N.session_no_schedule) { // teacher didn't open a session on this day of his schedule table.
                return 'qr-scanner'; // no schedule on this day.
            }
        } else { /// past classes.
            if (session[N.open] === N.session_open) { // past class. but open.
                return 'square';
            } else { // past & reserved.
                if (session[N.dayoff] === 'dayoff') {
                    return ''; // past class and dayoff.
                } else {
                    return 'lock'; // past class and reserved.
                }
            }
        }
    }


}
