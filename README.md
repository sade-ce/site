# Site

## Reference

* How to set admin
 Please see [LMS Management - Admin](https://docs.google.com/document/d/1ZpGsmKhnjqE9estnjr_vl9DcjdpeMSgxTz4B4eoTm7c/edit#heading=h.asi8m5vfg5sd)

* [Site and System Management](https://docs.google.com/document/d/1ZpGsmKhnjqE9estnjr_vl9DcjdpeMSgxTz4B4eoTm7c/edit#heading=h.5fy66t330rxr)
* [OnTue 2018 LMS Build Guide](https://docs.google.com/document/d/1ZpGsmKhnjqE9estnjr_vl9DcjdpeMSgxTz4B4eoTm7c/edit#heading=h.zfa2sr5gxz1q)
* Refer [OnTue issue tracker](https://github.com/thruthesky/ontue#issue-sh-boards)
* Refer [Site issue tracker](https://github.com/thruthesky/site#issue-sh-boards)
* Xapi
  * [Xapi](https://docs.google.com/document/d/1m3-wYZOaZQGbAzXeVlIpJNSdTIt3HCUiIt9UTmZUgXo/edit#heading=h.66hbi6holm5y) is a Wordpress Plugin primarily built for `Sonub.Com` and later LMS feature was added for `OnTue.COM`. It is the backend of `OnTue LMS` that the app is using.
  * [WordPress Xapi as PHP Restful API](https://docs.google.com/document/d/1w4QIQhkaGa55etiEiw1jsbfS_XhN8MQwFyex9l1BBeg/edit#heading=h.id4flcesu3j3)
  * [OnTue LMS with Xapi](https://docs.google.com/document/d/1ZpGsmKhnjqE9estnjr_vl9DcjdpeMSgxTz4B4eoTm7c/edit#heading=h.zfa2sr5gxz1q)

* [Ionic/Angular v4 Breaking Changes](https://github.com/ionic-team/ionic/blob/master/angular/BREAKING.md)

* [PHPJS library](http://locutus.io/php/) are saved under src/app/etc/php.

* [Ionic v4 Development Theory (Korean)](https://docs.google.com/document/d/12HPnIawKRAEKwZ6hftPtKNsUmhU5ENNu_WJZZuASsKE/edit#heading=h.dkfde9dlhii9)

* [Ontue v3 Issues](https://github.com/thruthesky/ontue#issue-sh-boards)

### Seo

* [SEO](https://docs.google.com/document/d/1ZpGsmKhnjqE9estnjr_vl9DcjdpeMSgxTz4B4eoTm7c/edit#heading=h.k8dvb9rv31rl)

### Branch managers

## Work Environment

Save these domains in `hosts` for test.

* www.ontue.org, ontue.org
* www.withcenter.org, withcenter.org
* www.katalkenglish.org, katalkenglish.org abc.katalkenglish.org def.katalkenglish.org test.katalkenglish.org

### Update local Xapi Server with latest information from server

* Update database like below.
  Note: 7-13 means, 7th day of week and 13 hour of the day in UTC+0.
  You may look into the backup files 'date' to get the latest data.
  And be careful you do it only your working computer. Not on server.

```` sh
scp ontue@ontue.com:./database-backup/7-13.sql.gz .
gunzip 7-13.sql.gz
# if you want, you can make back up here.
mysql -uroot -p7777 -e "drop database ontue"
mysql -uroot -p7777 -e "create database ontue"
mysql -uroot -p7777 ontue < 1-01.sql
cd ~/wordpress/wp-content/uploads
$ scp -r ontue@ontue.com:./www/wp-content/uploads/* .
````

## Installation

```` bash
sudo npm i -g ionic@rc
git clone https://github.com/thruthesky/site
cd site
npm i
npm i rxjs-compat
git submodule update --init
npm run s
````

### Update

```` bash
rm -rf node_modules
rm package-lock.json
npm i
````

### Test

```` bash
npm run e2e                         ; cypress open base url is localhost:4200
npm run e2e:headless                ; cypress run headless with all domain. (*) This is preferred to run all the tests.
npm run e2e:remote                  ; cypress open with real server urls.
npm run e2e:remote:headless         ; cypress run headless with real server urls. (*) This is preferred to run.
npm run e2e:katalk                  ; base url is www.katalkenglish.com
npm run e2e:englishas               ; base url is www.englishas.com
npm run e2e:gitpage                 ; cypress open with github page. only kakaotalk theme will be tested.
````

## Run

```` bash
npm run s                           ; Run with workserver.
ng s --disable-host-check
npm run serve:local                 ; Run with local backend server.
npm run serve:remote                ; Run on production server.
npm run serve:local:hmr             ; run locally with HMR. It is only working with global scss at this time. If you are going to work on global scss, you will need to copy final scss into component scss file.
npm run ssl                         ; run project with ssl. port is 9443. after run, access https://withcenter.katalkenglish.com:9443/
````

### Working with SSL and Branch coding

* Put `withcenter.katalkenglish.com` in hosts file in your working computer.
  This will work as `withcenter.com` domain.
  The app will opoen `withcenter` theme if the domain contains `withcenter`.

* set domains of `abc.katalkenglish.com`, `def.katalkenglish.com`, `branch.katalkenglish.com` in hosts file for test as branch subdomain.

* To create and access branch site and branch manager page,
  Create a branch with `abc` or `def`.

* It is okay to test the app without SSL. But push-notification may not work.
  To enable SSL please follow below.

  * Set `sslPort` from 4200 to 9443 in `environment.local-backend-server.ts`
    The default is 4200 which is the default port of Angular.
  * and run `npm run ssl`
  * Access `https://withcenter.katalkenglish.com:9433/franchise` to access withcenter site.

* Try to run with SSL always.

### Working SEO

* Add branch domain at sonub.com:8443 server block.
  * add domains like
    * katalkenglish.org
    * ontue.org
    * withcenter.org
    to server in sonub.com:8443 server block.
  * Access http://xxx.katalkenglish.com or http://katalkenglish.com

## Publish

* To test on GitHub Pages,

```` sh
ng build --prod --output-path docs --base-href=/site/
git add --all
git commit -m 'release for testing on GitHub Pages'
git push
````

then, access to https://thruthesky.github.io/site/

* To publish production site.

```` sh
npm run publish
npm run publish:all
````

## Deleting Javascript files on remote server

* Warning: If you do this, all Javascript files including currently working Javascript files will be deleted.
  Meaning, if you do this, the site will be down.
  So, you need to quickly re-publish the site again.

```` sh
npm run delete-remote-js
````

## Concepts

### No Multiple Apps Intergration

We may use Angular's [Multiple Apps Intergratin](https://github.com/angular/angular-cli/wiki/stories-multiple-apps) support since we have three different website.

But we simply decide to differenciate the theme based on domain. It's much simpler when it comes to management.

When source code is changed, we need only one time compilation and publishment. You don't have to manage all the three apps in one project.

## Folder structure

### Pages

#### sites folder

There are 3 different domains(themes) under `src/app/sites` folder for each part of business role.

1. `ontue` for teacher for teacher site.
2. `withcenter` for franchise site.
3. `katalkenglish` for student site.

Each site folder has its own components folder for header and footer and other components design.

* `src/app/sites/{site-name}/components`

And all of site has `{site}-home` folder to display its front page.

* `src/app/sites/{site-name}/{site-name-page-name}`. Note that `pages` path is missed under theme folder.

#### Pages in site folder

Since each domain has different contents, they should have its own pages.

For instance, katalkenglish.com( student site ) and ontue.com ( teacher site ) has completely diffent content on help page, so, each of them should have a different home page folder.

### Shared Pages

* Register page and Profile update page have some common for each site.
  If you want to create a page that is shared by other sites, then the page must be saved under `src/app/pages` folder.

### Shared Components

* Share components must be saved under `src/app/components`

### Components

* All shared components should be saved in `src/app/components`.

### Interface

* All shared interfaces should be saved in `src/app/interfaces`.

### Modules. 3rd party modules

* All shared modules, especially 3rd party modules, should be saved in `src/app/modules`.

## Providers

* All providers that is depending on the app should be svaed in `src/app/providers`.

### AppService as shared provider

* AppService is the only service you need to inject on all other components, pipes.
  * AppService holds all other services like
    * `AppService.fire` is the FireLibrary service
    * `AppService.user` is the XapiUserService
    * and so on.

## Developer's Guide Line

* Use Angular Material.
  * Do not use Ionic Component.

## Route and Lazy Loading

* Avaoid putting routes for submodule. Collect all the route on `app-routing.module.ts` for simplicity.
  * Though `admin page module` uses routes.

* All page must be lazy loaded. This means all page folder must be a module and registered as a route.
  Except header & footer templates which is needed to render layout. @see #Layout

## Layout for each site

* Each site has its own header, footer and possibly side menus and more.
* Layout is designed in `app.component.html` for each site.
  It imports each site's `header`, `footer` components.
  This means, each site's header & footer is not dynamically loaded. These are loaded on app booting.

* Each site's header, footer components must be saved under that site's components folder as a module and will be imported by `app module` and used in `app.component.html` to display the layout.

* You can have more than one(1) layout for a site IF you are going to edit `app.component.html`.
  * Layout of `www.katalkenglish.com` for desktop.
  * Layout of `www.katalkenglish.com` for mobile.

### Layout for header, page, footer

* Basic structure of each page must be the following.

```` html
<main>
<header>
  <h1>Page Title</h1>
  <p>Page description</p>
</header>
  <section class="content">
    ... page content ...
  </section>
</main>
````

* In app.component.html, there is outter html layouts.

```` html
<div class="layout" [attr.path]=" a.routeUrl ">
  <section id="katalkenglish" *ngIf=" a.site.katalkenglish ">
    <katalkenglish-header></katalkenglish-header>
    <section class="page">
      <div class="page-inner">
        <router-outlet>
          <!-- here goes the page layout -->
        </router-outlet>
      </div>
    </section>
    <katalkenglish-footer></katalkenglish-footer>
  </section>
</div>
````

## Naming Convention

### Module Names

* Page module file name must end with `.page.module.ts` and the name of the Module class must end with `PageModule`.
* And it is same to Component naming.

### Folders

* All pages must be under `pages` folder.
* All components must be under `componenets` folder.

## FlowChart

### Domain Navigation

* The App Component choose which `site` to navigate with the domain user accesses/visits.
  * For instance, `wwww.ontue.com` domain will open the page `src/app/sites/ontue/ontue-home/ontue-home.page`
  * This navigation is done by the combination of `app-routing.modules.ts` and `app.component.ts`.

## Boostrap CSS Version 4.0 Support

* @see [Bootstrap v4 comtomization](https://getbootstrap.com/docs/4.0/getting-started/theming/#importing)
* @see `themes/bootstrap-custom.scss`.

## Font Awesome

Since fontawesome takes a lot of spaces, you will only copy the SVG XML code into each templates.

* Since we are using lazy loading, putting SVG XML code in template may be a good choice even if it does not reuse the icon.

## Registration

* It will get domain of the site and save it on user field.
* Security does not matter on Firebase since Firebaes only holds not important data.
 The point is secured on `PHP backend`.

## Login

* Security does not matter on Firebase. Read ##Registration.

## Langage Translate

* It uses `FireLibrary` Language Transation for multi-language support.
  It has `language.service.ts` for encapsulating `FireLibrary`.

* When you are refering, `fire.ln.[CODE]`, do not encapsulate it in any method to make it easy or shortter, since when template changes, it may call the encapsulation all the time.

* How to use pipe. See [FireLibrary Language Translation](https://github.com/thruthesky/firelibrary#language-translation)

```` html
{{ fire.translate('KEY', {info: 'extra'}) }}   <!-- This calls a method -->
{{ fire.t('KEY', {info: 'extra'}) }}  <!-- Alias of translate() -->
{{ fire.ln.HOME }}  <!-- This access a variable. NOT method call. Prefered for speed. -->
{{ 'HOME' | t }} <!-- PIPE -->
<!-- complicated expressions -->
{{ post.created ? ('QNA_FORM_EDIT_TITLE' | t) : ('QNA_FORM_CREATE_TITLE' | t) }}
{{ 'AGE_GENDER' | t:{ age: re.teacher.age | number , gender: re.teacher.gender | t } }}
````

## Admin Page Module

* Since admin pages is only for admins, it does not lazy load. it loads all the subpages at once.

## New Admin Page Module (updated on 2018-06-16)

* admin-layout.page.scss is a global scss file.
  We need it to be globally applied to the app/site.
  For instance, we can redeclare the font size of body if it applies globally.

## Dialog Loader - Angular Material Dialog

Use loader service for showing a loader in dialog window when you need to show a loader.

```` typescript
constructor( public loader: LoaderService ) {
  loader.openLoader({title: 'Registering', content: 'Please wait while registering...'});
  setTimeout(() => loader.closeLoader(), 5000);
}
````

## Alert, Confirm - Angular Material Dialog

Use `modal` service to do 'alert' or 'confirm'.

You should not inject it on App Service and make it as a member variable since App Service is loaded by default. If you load `modal` on boot, there is no benefit of Lazy loading.

So, just inject and use it any where you want it.

```` typescript
modal.alert({ title: 'hi', content: 'oo'});
````

* How to use confirm dialog

```` typescript
    const data: ModalData = {
        content: 'Yes or no?',
    };
    this.modal.confirm(data).subscribe(result => {
        // console.log('User clicked on: ', re);
    });
````

## Cache

* `Teacher list` is cached and show when the user access. and it caches again in background.
  Meaning, the user will always see the latest updated list since it caches every time the user access teacher list page.

## Reload version tag

* It is stated in environemnt ts files like below. It should work on development only.

```` typescript
env['reloadTag'] = (new Date).getTime();
````

## Branch

* See `Run` section to run and test on branch functionality.

## KNOWN-BUG

* When user views on desktop, then, desktop probably '15 days' of schedule table has cached.
  * Then, the even the user changes 'days' or even changes to mobile view, he will still see '15 days' and even he refreshes, he will still see '15 days' until the cache expires.
  This is okay. Not a big problem. This won't happen to all users. Only to those of developers.

* First list of schedule table is being cached.
  * And this leads a bug when the user access schedule table with 'mobile view' at first
    And it cached.
    And changes to 'desktop view' later and visit the schedule table again,
    Then, the user will see 'mobile view' of 'schedule table' since it is cached.
    This is a very rare case. and we just ignore this.
    If the user visits another teacher's schedule table, it may look okay as in 'desktop view'.

## Known Problems

* For student registration page, 'Finding Kakaotalk ID' image is not translated and will not be translated.

* When student cancels commenting on class review, the user is redirected to teacher schedule table even if the stdent was acessing revew page from review list page.
  It is fairly okay.

## Resources

* logo icon svg is on tmp folder.

## English As Student Site


* Started working on July 12, 2018
  * `englishas` branch of github.com/thruthesky/site
  * `englishas` branch on `xapi` of my macbook. the `englishas` is not even on github server.
    * later after work, you will need to merge it into master of xapi and push.
    * need to copy 'kakaotalk_id' to 'class_software' = 'kakotalk' | 'skype', 'class_id' = 'id'.

### TODO for English As

* 아래의 수정에 대한, 디자인, 언어 번역을 모두 해야 함.

* @done 브랜치 기본 도메인이 katalkenglish.com 에서 englishas.com 으로 변경.
  왜냐? katalkenglish 도메인은 한국 한생에게만 사용 가능.
  즉, 더 이상 katalkenglish 로는 브랜치를 받지 않음.

* @done 브랜치 설정에서 기본 메신저를 정할 수 있음. 따라서 회원은 그냥 아이디만 입력하면 됨.

* @done 학생 회원 가입 할 때, 가맹사에서 지정한 메신저 아이디를 입력해야 함. 여러 아이디 선택을 하지 않음. 혼동을 피하기 위해서.

* @done 학생 수정 할 때에는 여러 메신저 중 하나를 사용 할 수 있음.

* @done 학생 회원 가입, 메신저 아이디 변경 테스트.

* @done 강사는 회원 가입/수정에서
  스카이프, 위쳇, 라인, 카톡 아이디가 모두 다 필요 함.
  wp_users.skype, wechat, kakaotalk, line 필드를 만들고 조정해야 함.

* @done 강사 프로필에서, 수업 예약 학생이 사용하는 메신저에 따른 메신저 아이콘과 아이디를 표시.
* @reject 강사 이력서에는 모든 메신저 정보를 표시한다. (학생이 혼동할 수 있음)
* @done 학생이 보는 수업 시간표에서, 학생이 사용하는 메신저에 따른 강사의 메신저 아이콘과 아이디를 표시.
* @done 강사가 보는 수업 시간표에서, 학생이 이용하는 메신저의 아이콘과 아이디 표시.

* @done katalkenglish-header.html 에서 mobileh-header 에서 engliash 전용 로고 작성.

* @done 관리자가 회원 정보 수정에서, 학생의 class-software 와 id 를 수정 할 수 있도록 한다.

* @done 언어 변환. 우선 아래의 것만 json 파일에서 직접 수정한다.
  * @done SELECT_CLASS_SOFTWARE
  * @done SELECT_CLASS_SOFTWARE_ID
  * @done CHOOSE_CLASS_SOFTWARE
  * @done KAKAOTALK,SKYPE,WECHAT,LINE
  * @done ADD_[KAKAOTALK|WECHAT|...] => ADD FRIEND
  * @done INPUT_[KAKAOTALK|WECHAT|...]_ID
  * @done QnA page
  * @done PROFILE_UPDATED
  * @done schedule table profile add messengers

* 강사 수업 시간표아 예약된 수업 목록에서 각 메신저 별 친구 추가가 잘 되는지 확인.
  * deeplink 등을 추가.

* xapi library::send_push_message() 에서 학생의 도메인으로 push 를 보내야 함.

* @see other git issues

#### TODO for openning

* 오픈을 위한 마무리
  * https://*.englishas.com 전체 서브 도메인을 포함하는 SSL 구매 및 적용.
  * 가맹사 생성 테스트.
  * php 에서 번역을 4개 국어로 해야하고,
    * CODE_EMPTY_CLASS_SOFTWARE, CODE_EMPTY_CLASS_SOFTWARE_ID 에 대해서, 스카이프, 카톡, 위쳇, 라인 앱 이름을 정확히 명시해야 한다.

  * 테스트. 모든 페이지 다 테스트. 회원가입, 글 읽기, 수업 예약, 예약 확인, 취소, 즉시예약 등.
  * 디자인.
    * 회원 가입/수정.
      * 회원 정보를 업데이트하면, profile updated 디자인.

  * 기존의 kakaotalk_id 필드를 삭제. 또는 이름 변경해서 백업.
    * 학생의 경우, 기존의 kakaotalk_id 를 class_software=kakaotalk, class_software_id=카톡아이디로 복사.
    * 강사의 경우, kakaotalk 으로 변경.

  * 각종 테스트
    * 강사 검색이 각 메신저 아이디로 되는지 확인.
    * 관리자 페이지에서 lms.admin_query() 를 많이 하는데, 그 결과가 기존의 kakaotalk_id 에서
      강사는 5개의 메신저,
      학생은 class_software, class_software_id 로 변경되었다.
      기존 코드가 올바로 변경이 잘 되었는지, 확인 해 볼 것.
    * 강사 또는 학생이, class software id 를 변경하는 경우, lms_reservation 테이블의 class_id 에도 모두 변경이되는지 확인해야 한다.
      이것은 학생이, 이중 아이디를 만들어 무료 체험을 무한대로 하지 못하게 막으려는 것이다.
      * 하지만 문제 발생. 스카이프와 카톡아이디가 다른데, 각각 스카이프와 카톡으로 회원가입하면, 여러 차례 무료 체험 수업을 들을 수 있다.
        * 회원 메일 주소로도 같이 체크를 할 수 있도록 이슈를 발행한다.

* 오픈.
  * 중요: 오픈 절차를 따라야 함. 그렇지 않으면 실패. 큰 문제 발생.
  * 먼저, 아래와 DB 패치를 해야한다. 이것은 기존의 kakaotalk_id 를 학생의 class software /id 와 강사의 kakaotalk 필드에 카톡 아이디 정보를 변경하는 것이다.
    패치 방법:
      cd wp-content/plugins/xapi-2/lms/patch
      php class-software.php
  * 그리고 kakaotalk_id 필드를 kakaotalk_id_backup 으로 이름을 변경한다.
    SQL 쿼리:
      ALTER TABLE `wp_users` CHANGE `kakaotalk_id` `kakaotalk_id_backup` VARCHAR(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '';

    이렇게 필드명을 바꾸어 버리면, 패치를 다시 실행 할 수도 없다.

* 마무리 한 다음. English As 오픈 후.
  * 보다 편리한 언어 변환. 구글 drive 를 사용하는 것보다 직접 만들면 더 편리함. 직접 만드는 것이 좋을 것 같음.
    * 구글 drive 를 활용하는 경우.
    기존의 json 파일들을 모두 CSV 파일로 쏟아 부어서, 아래의 파일로 저장한다. 그래서 여러 사람들이 수정하게 한 다음,
    * Google Language Translation Doc
  https://docs.google.com/spreadsheets/d/1tdYbpSErJZw-NuMYbocKyq7DIaN1YyxZADEkrxw66zQ/edit#gid=0

    * 다시, json 파일로 변환한다.

  * 온튜 풀어야 할 과제.
    https://docs.google.com/document/d/1sjvKRhYRoYqhQwxrlhLnZK_7xMmJ0KzNPtgIvYCr8Fw/edit#heading=h.wge93zpyb08h
  
  * 관리자 페이지에, 각 branch 별 목록 및 정보 수정을 할 수 있도록 한다.
    * www.englishas.com 도 브랜치를 만든다.
    * 그리고 englishas.com 은 그냥 www.englishas.com 으로 해서, 설정을 할 수 있도록 한다.
    * www.englishas.com 자체도 로고 등을 변경하여 사용 할 수 있다.
    * branch 별로 상담 카톡, 스카이프, 위쳇, 큐큐, 라인 아이디를 둔다.
    * 질문 답변 페이지를 업데이트해야한다.
  * 모든 강사에게 스카이프와 위쳇을 설치하라고 한다.
    * 위쳇 QR 코드를 등록해야 한다.
    * 라인과 큐큐는 나중에.
    * 그리고 학생이 위쳇으로 수업하면, 선생님 사진 옆에, QR 마크를 화면에 표시해야 한다.