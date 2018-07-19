import { Component } from '@angular/core';
import { AppService } from '../../../../providers/app.service';
// import { FireService } from '../../../../modules/firelibrary/core';
import { XapiUserService } from '../../../../modules/xapi/xapi.module';

@Component({
  selector: 'katalkenglish-header',
  templateUrl: 'katalkenglish-header.component.html',
  styleUrls: ['katalkenglish-header.component.scss'],
})
export class KatalkEnglishHeaderComponent {

  selectedLanguage = '';
  isEdge = false;
  constructor(
    public a: AppService,
    // public f: FireService,
    public user: XapiUserService
  ) {
    this.isEdge = a.isEdge();
    // console.log(`HeaderComponent:constructor()`);
    // console.log(`current: ${a.color}, change: red`);
    // a.setColor('red');
    this.selectedLanguage = this.a.language.getUserLanguage();
  }
  onClickLogout() {
    // this.a.fire.user.logout().then( () => {
      // this.user.logout();
    // // });
    // this.a.openHome();
    this.a.logout(true);
  }
  onChangeLanguage() {
    // if ( event && event.preventDefault !== void 0 ) {
    //   event.preventDefault();
    // }
    // console.log( this.selectedLanguage );
    this.a.language.setUserLanguage( this.selectedLanguage );
    // return false;
  }
}



