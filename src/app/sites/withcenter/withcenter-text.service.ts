import { Injectable } from '@angular/core';
import { texts } from './withenter-text';
import { Library as _ } from './../../etc/library';

export const WITHCENTER_LANGUAGE_CODE = 'withcenterLanguageCode';

@Injectable()
export class WithcenterTextService {


    languageCode = 'en';
    selectedTexts = {};
    getTexts() {
        this.languageCode = this.getLanguageCode();
        // this.t = getTexts(this.languageCode);

        const keys = Object.keys(texts);
        console.log('keys: ', keys);
        console.log('texts: ', texts);
        for (const key of keys) {
            this.selectedTexts[key] = texts[key][this.languageCode];
        }

        console.log('selectedTexts: ', this.selectedTexts);
        return this.selectedTexts;
    }

    getLanguageCode(): string {

        const ln = _.get(WITHCENTER_LANGUAGE_CODE);
        if (ln) {
            return ln;
        } else {
            return _.getBrowserLanguage();
        }
    }

    setLanguageCode( ln ) {
        _.set(WITHCENTER_LANGUAGE_CODE, ln );
    }

}