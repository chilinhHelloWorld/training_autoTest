/// <reference types="cypress" />
import SearchIframe, {SearchI} from '../../support/PageObject/searchIframe/SearchIframe'
require('cypress-xpath')

describe('Testing Table with Cypress', ()=> {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

  beforeEach(()=>{
    cy.viewport(1500, 800)
    cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrameTest ')
  })

  it('TC_001_VerifyShouldContain', () => {
    var searchI = new SearchIframe();
    searchI.getIframeTag().click();
    SearchI('Selenium');
    searchI.getIframe().within(() => {
        searchI.getArticle().click();
    })
  })
})