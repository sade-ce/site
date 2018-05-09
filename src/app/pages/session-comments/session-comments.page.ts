import { Component, OnInit } from '@angular/core';
import { AppService } from '../../providers/app.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
    selector: 'session-comments-page',
    templateUrl: 'session-comments.page.html',
    styleUrls: ['session-comments.page.scss'],
})
export class SessionCommentsPage implements OnInit {

    comments = [];

    pageOption = {
        limitPerPage: 10,
        currentPage: 1,
        limitPerNavigation: 4,
        totalRecord: 0
    };

    idx_teacher = null;

    showloader = false;

    constructor(
        public a: AppService,
        public router: Router,
        public alertCtrl: AlertController
    ) {
        this.loadClassComment();
    }

    ngOnInit() {

    }

    loadClassComment() {
        this.a.lms.get_latest_student_comment_to_teachers({
            limit: this.pageOption['limitPerPage'],
            page: this.pageOption['currentPage']
        }).subscribe(res => {
            // console.log("loadClassComment:: ", res);
            this.comments = res['comments'];
            this.pageOption.currentPage = res['page'];
            this.pageOption.limitPerPage = res['limit'];
            this.pageOption.totalRecord = res['total'];
        }, e => {
            this.a.toast(e);
        });

    }


    async onClickDelete(comment) {
        // console.log('user.id', this.a.user.id);
        // console.log("onClickDelete:: ", comment);

        const confirm = await this.alertCtrl.create({
            header: this.a.t('DELETE COMMENT'),
            subHeader: this.a.t('CONFIRM DELETE'),
            buttons: [
                {
                    text: this.a.t('YES'),
                    handler: () => {
                        // console.log('Yes');
                        this.showloader = true;
                        const data = {
                            idx: comment.idx
                        };
                        this.a.lms.student_comment_to_teacher_delete(data).subscribe(res => {
                            // console.log("student_comment_to_teacher_delete:: ", res);
                            if (res['idx'] === comment.idx) {
                                comment.idx = '';
                                this.a.toast(this.a.t('COMMENT DELETED'));
                            }
                            this.showloader = false;
                        }, e => {
                            this.a.toast(e);
                            this.showloader = false;
                        });
                    }
                },
                {
                    text: this.a.t('CANCEL'),
                    handler: () => {
                        // console.log('cancel');
                    }
                }
            ]
        });
        confirm.present();
    }


    onClickCommentEdit(comment) {
        // const createCommentModal = this.modalCtrl.create(StudentCommentEdit, {comment: comment}, {cssClass: 'student-comment-edit'}
        // );
        // createCommentModal.onDidDismiss(res => {
        //     if (res === 'success') {
        //         this.loadClassComment();
        //     }
        // });
        // createCommentModal.present();
    }


    onClickShowMore(comment) {
        console.log('onClickShowMore::', comment);
        this.router.navigate(['session-comments-list'], {queryParams: {idx_teacher: comment['idx_teacher']}});
    }

    onClickCommentCreate() {
        // const createCommentModal = this.modalCtrl.create(StudentCommentEdit, {idx_teacher: this.idx_teacher}, {cssClass: 'student-comment-create'}
        // );
        // createCommentModal.onDidDismiss(res => {
        //     if (res === 'success') this.onClickShowMore({idx_teacher: this.idx_teacher});
        // });
        // createCommentModal.present();
    }


    onPostPageClick($event) {
        this.pageOption['currentPage'] = $event;
        this.loadClassComment();
    }

}

