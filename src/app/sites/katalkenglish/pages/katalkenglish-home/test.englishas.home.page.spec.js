/// <reference types="Cypress" />

import { config } from "../../../../../../cypress";

context('Actions', () => {
    before(() => {})
    after(() => {})
    beforeEach(() => {
    })
    afterEach(() => {})
    describe('EnglishAs Homepage Test', () => {
        it('EnglishAs homepage open', () => {
            cy.visit( config.url.katalkenglish );
            cy.get('#katalkenglish').find('header');
            cy.get('#student-comments');
        })
    })
})
