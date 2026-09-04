/// <reference types="cypress" />
describe('Rahul Shetty Practice App', () => {
  beforeEach(() => {
    cy.visit('/');
  })

it('verify the title of the page',()=>{
    cy.visit('/practice');
    let title = cy.title();
    cy.log(title);
    title.should('eq','QA Automation Practice Sites | Playwright, Selenium & API Testing');
    cy.contains('button', 'Start Practicing').click();
    cy.get('#verify-name').type('Bibhu Pandey');
    cy.get("#verify-email").should('be.visible').type('bibhupandey763@gmail.com');
    cy.get('.space-y-4.pt-4>[type=submit]').should('be.visible').click({force:true});
    // cy.origin("https://rahulshettyacademy.com/AutomationPractice/",()=>{
    //     cy.get('.container>h1').should('be.visible').and('have.text','Welcome to Rahul Shetty Academy');
      // })

})
})
