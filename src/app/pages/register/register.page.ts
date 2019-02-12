import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../providers/app.service';
import {
    USER_REGISTER, USER_DATA_RESPONSE, FILES, USER_UPDATE, USER_UPDATE_RESPONSE, FILE
} from '../../modules/xapi/interfaces';
import { XapiFileUploadComponent } from '../../components/xapi-file-upload/xapi-file-upload.component';
import { LoaderService } from '../../providers/loader/loader.service';
import { ModalService, ModalData } from '../../providers/modal/modal.service';
import { ForumService } from '../../providers/forum/forum.service.module';
import { CLASS_SOFTWARE_KAKAOTALK, DEFAULT_CLASS_SOFTWARE } from '../../providers/defines';


@Component({
    selector: 'app-component-register',
    templateUrl: 'register.page.html',
    styleUrls: ['register.page.scss'],
})
export class RegisterPage implements OnInit {

    /**
     * For form variables
     *
     */
    form = <USER_REGISTER>{
        gender: 'F'
    };
    agree = false;
    birthday;
    year: string;
    month: string;
    day: string;
    files: FILES = [];
    qrmarks: FILES = [];
    // @see https://docs.google.com/document/d/1ZpGsmKhnjqE9estnjr_vl9DcjdpeMSgxTz4B4eoTm7c/edit#heading=h.ehcawgq9o2ps
    @ViewChild('profilePhotoUpload') fileUpload: XapiFileUploadComponent;
    @ViewChild('QRMARKFileUpload') fileUploadQRMark: XapiFileUploadComponent;
    showQRMark = false;
    showFindKakaotalkIDBox = false;

    show = {
        dataLoader: false,
        updateLoader: false,
        updateClassSoftware: false,
        updated: false
    };

    user_type: '' | 'S' | 'T';


    timezones = {};
    timezoneOffset;

    year_now = new Date().getFullYear();

    // backup_class_software = '';
    // backup_class_software_id = '';
    constructor(public a: AppService,
        public loader: LoaderService,
        public modal: ModalService,
        public forum: ForumService
    ) {

        // setTimeout(() => this.test(), 1000);

        // a.onUserRegisterPage();
        this.setTimezone();
        if (a.user.isLogin) {
            this.loadData();
        }

        // this.onClickKakaoIDHelp();
    }

    // test() {
    //     this.testRegister();
    // }

    // testRegister() {
    //     const id = this.a.randomString('user');
    //     this.form.user_email = id + '@gmail.com';
    //     this.form.user_login = this.form.user_email;
    //     this.form.user_pass = id;
    //     this.form.display_name = id;
    //     this.form.kakaotalk_id = id;
    //     this.form.domain = this.a.getDomain();
    //     this.registerWordpressBackend();
    // }

    ngOnInit() {
        // this.form.email = 'test' + (new Date).getTime() + '@user.com';
        // this.form.password = this.form.email;
        // this.form.displayName = 'Name';
        // this.onSubmitRegisterForm();
    }

    setTimezone() {
        this.timezoneOffset = this.a.lms.getUserLocalTimezoneOffset();
        // console.log('timezoneOffset', this.timezoneOffset);
        this.a.lms.timezones().subscribe(re => {
            // console.log('setTimezone', re);
            this.timezones = re;
        });
    }

    keysTimezone() {
        return Object.keys(this.timezones).sort((a: any, b: any) => a - b);
    }

    formatTimeCode(offset) {
        if (offset > 0) {
            return '+' + offset;
        } else {
            return offset;
        }
    }


    loadData(callback?) {
        this.show.dataLoader = true;
        this.a.user.data().subscribe((userData: USER_DATA_RESPONSE) => {
            this.show.dataLoader = false;
            // console.log('userData::', userData);
            this.form.user_email = userData.user_email;
            this.form.name = userData.name;
            this.form['display_name'] = userData['display_name'];
            this.form.phone_number = userData.phone_number;
            this.form.kakao_qrmark_URL = userData.kakao_qrmark_URL;
            this.form.bookable_time = userData.bookable_time;
            this.user_type = userData.user_type;


            /**
             * software
             */
            this.form.class_software = userData.class_software;
            this.form.class_software_id = userData.class_software_id;

            this.form.skype = userData.skype;
            this.form.kakaotalk = userData.kakaotalk;
            this.form.wechat = userData.wechat;
            this.form.line = userData.line;
            this.form.qq = userData.qq;



            if (userData.birthday.length > 0) {
                this.year = userData.birthday.substr(0, 4);
                this.month = userData.birthday.substr(4, 2);
                this.day = userData.birthday.substr(6, 2);
                this.birthday = '' + this.year + '-' + this.month + '-' + this.day; // old
                this.form.birthday = '' + this.year + this.month + this.day;
            }
            this.form.gender = userData.gender;
            if (userData.primary_photo.id) {
                this.files = [userData.primary_photo];
            }
            if (userData.kakao_qrmark_photo.id) {
                this.qrmarks = [userData.kakao_qrmark_photo];
            }


            /// Check if QR Mark converting has been failed.
            ///
            this.form.class_software_id = userData.class_software_id;
            this.form['kakao_qrmark_string'] = userData.kakao_qrmark_string;
            if (this.form.kakao_qrmark_URL && !this.form.kakao_qrmark_string) {
                this.a.lms.update_kakao_qrmark_string().subscribe(re => {
                    // console.log(re);
                    if (re['kakao_qrmark_string']) {
                        this.form.kakao_qrmark_string = re['kakao_qrmark_string'];
                    }
                }, e => this.a.toast(e));
            }
            /// eo

            if (callback) {
                callback();
            }

        }, e => {
            this.show.dataLoader = false;
            this.a.toast(e);
        });
    }

    /**
     * User registration has complete.
     * You can do whatever you want to do like logging, pushing, etc.
     */
    onRegisterSuccess() {
        this.loader.closeLoader();
    }

    onRegisterFailure(e) {
        //
        // console.log('Error on register: ', e);
        this.loader.closeLoader();
        this.a.toast(e);
    }

    onSubmitRegisterForm(event?: Event) {
        if (event) {
            event.preventDefault();
        }
        if (this.a.isLogout) {
            this.form.domain = this.a.site.getDomain();
        }


        if (!this.form.name || !this.form.name.length) {
            return this.a.toast(this.a.t('NAME_REQUIRED'));
        }
        if (!this.form.display_name || !this.form.display_name.length) {
            return this.a.toast(this.a.t('NICKNAME_REQUIRED'));
        }
        if (!this.form.user_email || !this.form.user_email.length) {
            return this.a.toast(this.a.t('EMAIL_REQUIRED'));
        }
        if (this.a.user.isLogout && (!this.form.user_pass || !this.form.user_pass.length)) {
            return this.a.toast(this.a.t('PASSWORD_REQUIRED'));
        }
        if (this.a.site.teacherTheme) {
            if (!this.month || !this.month.length) {
                return this.a.toast('Birth month is required.');
            }
            if (!this.day || !this.day.length) {
                return this.a.toast('Birth day is required.');
            }
            if (!this.year || !this.year.length) {
                return this.a.toast('Birth year is required.');
            }

            this.patchBirthday();
            if (this.a.isLogout) {
                this.user_type = 'T';
            }
        }

        // if (this.a.user.isLogin && this.user_type === 'T' && !this.qrmarks.length) {
        //     return this.a.toast('Teacher must upload QR Mark...');
        // }

        if (!this.form.phone_number) {
            return this.a.toast(this.a.t('PHONE_NUMBER_REQUIRED'));
        }

        this.form.phone_number = this.form.phone_number.replace(/[^0-9]+/g, '');
        // this.form.phone_number = this.form.phone_number.replace(/\+/g, '');
        // this.form.phone_number = this.form.phone_number.replace(/\-/g, '');
        // this.form.phone_number = this.form.phone_number.replace(/\(/g, '');
        // this.form.phone_number = this.form.phone_number.replace(/\)/g, '');
        // this.form.phone_number = this.form.phone_number.replace(/\./g, ''); // ??

        // console.log('this.form.phone_number', this.form.phone_number);
        if (!this.form.phone_number) {
            return this.a.toast(this.a.t('PHONE_NUMBER_REQUIRED'));
        }


        /**
         * If the site is katalkenglish.com, then it always uses kakaotalk
         */
        if (this.a.site.is.katalkenglish) {
            this.form.class_software = CLASS_SOFTWARE_KAKAOTALK;
        }

        this.form.photoURL = this.files.length ? this.files[0].url : '';
        this.form.kakao_qrmark_URL = this.qrmarks.length ? this.qrmarks[0].url : '';
        this.form.user_type = this.user_type;


        // console.log('form: ', this.form);
        if (this.a.user.isLogin) { // UPDATE
            // console.log('GOING TO UPDATE');
            this.updateWordpressBackend();
        } else { // REGISTER
            // A student is going to register?
            if (this.a.site.studentTheme) {
                if (!this.form.class_software) {
                    this.form.class_software = this.a.branch.info.class_software;
                }
                if (!this.form.class_software_id) {
                    return this.a.toast(this.a.t('INPUT_' + this.form.class_software + '_ID'));
                }
            }
            if (!this.agree) {
                this.modal.alert({ content: this.a.ln.YOU_ARE_TO_AGREE });
                return;
            }
            this.registerWordpressBackend();
        }
    }

    /**
     * patch the year,month and day to create date YYYYMMDD
     */
    patchBirthday() {
        this.form.birthday = this.year + this.month + this.day;
    }

    /**
     * Register into WordPress backend first before register into Firebase.
     * The validation has done already before this method.
     *
     * This is being invoked only for un-registered users.
     */
    registerWordpressBackend() {

        this.loader.openLoader({
            title: this.a.ln.IN_REGISTERING,
            content: this.a.ln.IN_REGISTERING_DESCRIPTION
        });

        this.form.user_login = this.form.user_email;
        delete this.form.kakao_qrmark_string;
        this.a.user
            .register(this.form)                // register into Xapi backend.
            .subscribe(re => {
                this.a.onUserRegister();
                this.form.user_pass = null;
                this.a.lms.timezone_set(this.timezoneOffset).subscribe(() => {      // set timezone.
                    this.onRegisterSuccess();
                    if (this.a.site.studentTheme) {
                        this.a.open('/welcome');
                    } else {

                    }
                }, () => {
                });
            }, e => {
                this.onRegisterFailure(e);
            });
    }


    updateWordpressBackend() {
        delete this.form.kakao_qrmark_string;
        this.show.updateLoader = true;
        this.show.updated = false;
        this.form.class_software_id_check = '';
        this.a.user.update(this.form).subscribe((res: USER_UPDATE_RESPONSE) => {
            // console.log('updateUserInfo:', res);
            this.show.updateLoader = false;
            this.show.updateClassSoftware = false;
            this.a.toast(this.a.ln.USER_PROFILE_UPDATED);
            this.a.onUserProfileUpdate();
            this.loadData(() => {
                this.show.updated = true;
                setTimeout(() => this.show.updated = false, 10000);
            });
        }, err => {
            this.show.updateLoader = false;
            this.a.toast(err);
        });
    }


    onSuccessUploadPicture(file) {
        /**
         * Delete previous photo.
         *
         * file[0]
         */
        if (this.files.length > 1) { /// If there are two files, one for prvious photo, the other is for new photo.
            this.fileUpload.deleteFile(this.files[0], () => this.updatePrimaryPhoto(file), () => this.updatePrimaryPhoto(file));
        } else {
            this.updatePrimaryPhoto(file);
        }


    }


    updatePrimaryPhoto(file) {

        const data: USER_UPDATE = {
            photoURL: this.files[0].url,
            user_email: this.form.user_email
        };

        if (this.a.user.isLogin) {
            this.a.user.update(data).subscribe((res: USER_UPDATE_RESPONSE) => {

                // console.log("updatePrimaryPhoto", file);
                this.files[0] = file;
                this.a.render(100);
                this.a.render(5000); // on mobile, the image is updated very late.
                this.a.render(15000);
            }, err => {
                this.a.toast(err);
            });
        }

    }


    onSuccessUploadQRMark(file: FILE) {
        if (this.qrmarks.length > 1) {
            this.fileUploadQRMark.deleteFile(this.qrmarks[0], () => {
            }, e => this.a.toast(e));
        }
        if (this.a.isLogout) {
            return;
        }
        const data: USER_UPDATE = {
            kakao_qrmark_URL: file.url,
            user_email: this.form.user_email
        };
        this.a.user.update(data).subscribe(() => {
            this.a.lms.update_kakao_qrmark_string().subscribe(res => {
                if (!res.kakao_qrmark_string) {
                    this.a.toast('Invalid QR MARK, Please try again');
                    this.fileUploadQRMark.deleteFile(this.qrmarks[0], () => {
                        this.qrmarks = [];
                        this.a.render();
                    }, e => this.a.toast(e));
                } else {
                    this.qrmarks = [file];
                    this.showQRMark = true;
                    // console.log('res: ', res);
                    this.form.kakao_qrmark_string = res.kakao_qrmark_string;
                    this.a.render();
                }
            }, () => {
                this.a.toast('Failed to convert QR mark. There may be an error on server while converting QR mark.');
                this.fileUploadQRMark.deleteFile(this.qrmarks[0], () => {
                    this.qrmarks = [];
                    this.a.render();
                }, e => this.a.toast(e));
            });
        }, e => this.a.toast(e));
    }

    onClickKakaoIDHelp() {

        let content = '';
        if (this.a.site.studentTheme) {
            /**
             * @todo a.site.studentTheme is working on string???
             */
            content = `
            <section class="content" *ngIf="a.site.studentTheme">
                <div class="kakaotalk-id-find-box">
                        <img src="assets/img/find-kakaotalk-id.jpg" style="width: 100%;">
                </div>
            </section>
        `;
        } else {
            content = `
            <section class="content">
                <p>1. Open the Kakaotalk app on your smart phone. *(Login if you didn't login yet)</p>
                <p>2. In your Kakaotalk app, press the <b>More Option Button</b>. ( 3 dot shown on the image below)</p>
                <div class="image"><img src="assets/img/kakao/6.jpg"></div>
                <p>3. Press <b>My Profile</b>. ( Primary Photo with your name shown on the image below )<p>
                <div class="image"><img src="assets/img/kakao/7.jpg"></div>
                <p>4. If you have set your Kakaotalk ID before you will see your Kakaotalk ID in the image below.
                    Or else press the <b>KakaoTalk ID</b> to set your ID.
                </p>
                <div class="image"><img src="assets/img/kakao/10.jpg"></div>
                <p>5. Enter the desired Kakaotalk ID, then press OK. ( Kakaotalk ID is unique to everyone )</p>
                <div class="image"><img src="assets/img/kakao/11.jpg"></div>
                <p>6. Good Job! You have properly set your kakaotalk ID.</p>
            </section>
            `;
        }
        const data: ModalData = {
            title: this.a.ln['FIND KAKAOTALK ID'],
            content: content,
            maxWidth: '600px'
        };
        this.modal.alert(data);
    }

    showModalFAQ() {
        const content = `
            <section class="content">
                <p>1. Open the Kakaotalk app on your smart
                    phone. *(Login if you didn't login yet) </p>
                <p>2. In your Kakaotalk app, press the <b>More
                    Option Button</b>. (3 dot shown on the image below)</p>
                <div class="image"><img src="assets/img/kakao/6.jpg"></div>
                <p>3. Press My <b>Profile</b>. (Primary Photo
                    with your name shown on the image below)</p>
                <div class="image"><img src="assets/img/kakao/7.jpg"></div>
                <p>4. Press the <b>QR Code Button</b>.</p>
                <div class="image"><img src="assets/img/kakao/8.jpg"></div>
                <p>5. Press the <b>Download Button</b> to get a
                    copy of your QR Code. (Check your gallery or Download folder)</p>
                <div class="image"><img src="assets/img/kakao/9.jpg"></div>
                <p>6. Hurray! You have a copy of your QR Code,
                    you can update your Curriculum Vitae by uploading this image.</p>
            </section>
        `;
        this.modal.alert({ content: content });
    }


    /**
     * show toc
     */
    onClickTermsAndConditions() {
        this.forum.getLatestPost('termsandconditions').subscribe(posts => {
            if (posts.length) {
                // posts[0].content.rendered = <any>this.sanitizer.bypassSecurityTrustHtml(posts[0].content.rendered);
                this.modal.alert({ content: posts[0].content.rendered });
            }
        });
    }


    onClickUpdateClassSoftware() {
        this.show.updateClassSoftware = true;
        // this.backup_class_software = this.form.class_software;
        // this.backup_class_software_id = this.form.class_software_id;
        // this.form.class_software = '';
        this.form.class_software_id = '';
    }
    onCancelUpdateClassSoftware() {
        this.show.updateClassSoftware = false;
        // this.form.class_software = this.backup_class_software;
        // this.form.class_software_id = this.backup_class_software_id;
    }

    /**
     * Returns class_software of the user.
     *
     *      1. if the user has a class_software, then return it.
     *      2. if not, if the branch has default class_software, then return it.
     *      3. if not, return DEFAULT_CLASS_SOFTWARE
     *
     */
    myClassSoftware(): string {
        // console.log('this.form.class_software:', this.form.class_software);
        if (this.form.class_software !== void 0 && this.form.class_software) {
            return this.form.class_software;
        } else {
            return this.a.branch.info.class_software;
        }
    }





    onChangeClassSoftware(name) {
        this.show.updateClassSoftware = false;
    }


    checkPhoneNumber(e) {
        // console.log('checkPhoneNumber::this.form.phone_number', this.form.phone_number);
        // console.log('checkPhoneNumber::event', e.key);

        const k = e.key;
        if (k >= 0 && k <= 9) {
            return true;
        }

        if (k === '-' || k === '+' || k === '(' || k === ')' || k === ' ') {
            return true;
        }

        if (e.keyCode === 8 || e.keyCode === 46 || e.keyCode === 35 || e.keyCode === 36 || e.keyCode === 37 || e.keyCode === 39) {
            return true;
        }

        return false;


        // if (!((e.keyCode > 95 && e.keyCode < 106)
        //     || (e.keyCode > 47 && e.keyCode < 58)
        //     || e.keyCode === 8)) {
        //     return false;
        // }
    }
}
