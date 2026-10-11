///<reference types="cypress" />
import WebTableActions from '../../PageActions/WebTableActions.js';

const webTableActions = new WebTableActions();

describe('Web Table Handling',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Verify the Web Table title',()=>{
        cy.visit('/AutomationPractice/');
        webTableActions.validateTitle();
    })
})
