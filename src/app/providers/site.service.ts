import { Injectable } from '@angular/core';
import { SITE_KATALKENGLISH, SITE_ONTUE, SITE_WITHCENTER, SITE, SITE_ADMIN } from './defines';

@Injectable()
export class SiteService {

    /**
     * It prepares site code on booting. So, it won't be computed again on run time.
     * Use this whenever you need to determin if the user is using Stduent site or Teacher site
     *      and inside template whenever you need site code.
     *
     * This will not recompute anything and it's good to use in template.
     * @code
     *      <section id="ontue" *ngIf=" a.site.ontue ">
     *      if ( this.a.site.katalkenglish ) { ... }
     */
    is: SITE = {
        ontue: false,
        katalkenglish: false,
        englishas: false,
        withcenter: false,
        admin: false
    };


    constructor() {

        // Base.collectionDomain = 'database';
        this.is[this.getSite()] = true;


    }


    /**
     * Returns a domain of the site including sub-domain
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hostname
     *
     * @return string
     *      abc.com
     *      www.abc.com
     *      subdomain.rootdomain.com
     */
    getDomain() {
        return window.location.hostname;
    }

    private isKatalkenglishDomain() {
        return this.getDomain().indexOf(SITE_KATALKENGLISH) !== -1;
    }

    private isOntueDomain() {
        return this.getDomain().indexOf(SITE_ONTUE) !== -1;
    }

    private isWithcenterDomain() {
        return this.getDomain().indexOf(SITE_WITHCENTER) !== -1;
    }
    private isAdminPath() {
        if (document && document.location && document.location.pathname) {
            if (document.location.pathname.indexOf('/manager') !== -1) {
                return true;
            }
        }
        return false;
    }

    /**
     * Returns true if the theme that the user is using is student's theme.
     *
     * @description student's theme may have more than one site/domain.
     */
    get studentTheme() {
        if (this.teacherTheme) {
            return false;
        } else if (this.withcenterTheme) {
            return false;
        } else {
            return true;
        }
        // return this.site.katalkenglish;
    }

    get teacherTheme() {
        return this.is.ontue;
    }
    get withcenterTheme() {
        return this.is.withcenter;
    }

    /**
     * Returns site code.
     *
     * It determins which site you are in.
     */
    getSite(): string {
        if (this.isAdminPath()) {
            return SITE_ADMIN;
        } else if (this.isWithcenterDomain()) {
            return SITE_WITHCENTER;
        } else if (this.isKatalkenglishDomain()) {
            return SITE_KATALKENGLISH;
        } else if (this.isOntueDomain()) {
            return SITE_ONTUE;
        } else {
            return SITE_KATALKENGLISH;
        }
    }

    /**
     * Returns true if the user is accessing kakaotalk main domain
     *      like `katalkenglish.com` or `www.katalkenglish.com`.
     * Sub domains of katalkenglish.com or other domains returns false.
     *
     * @example Use this method to do something that is only related with katalkenglish.com root domain.
     *
     *  Aside katalkenglish, there might be another student domain like 'englishas.com'.
     *
     *  But it only returns true if the user is accessing 'katalkenglish' main domain.
     */
    get katalkEnglishRootDomain(): boolean {
        const d = this.getDomain();
        if (d.indexOf('katalkenglish') === 0 || d.indexOf('www.katalkenglish') === 0) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * Returns true if the user is accessing 'englishas.com' or 'www.englishas.com'.
     */
    get englishAsRootDomain(): boolean {
        const d = this.getDomain();
        if (d.indexOf('englishas') === 0 || d.indexOf('www.englishas') === 0) {
            return true;
        } else {
            return false;
        }
    }

}
