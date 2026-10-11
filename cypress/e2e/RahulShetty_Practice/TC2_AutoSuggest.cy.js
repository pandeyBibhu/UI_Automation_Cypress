//<reference types="cypress"/>
import AutoSuggestActions from '../../PageActions/AutoSuggestActions.js';
const autoSuggestAction=new AutoSuggestActions();

describe('AutoSuggestion Handling', () => {
    beforeEach(()=>{
        cy.visit('/');
    })
    it('verify the AutoSuggestion title',(()=>{
          cy.visit('/AutomationPractice/');
          autoSuggestAction.validateAutoSuggestionTitle();
        }))
    it('Verify input field is visible',()=>{
        cy.visit('/AutomationPractice/');
        autoSuggestAction.validateInputFieldVisible();
    })
    it('Verify input is enabled',()=>{
        cy.visit('/AutomationPractice/');
        autoSuggestAction.validateInputFieldEnabled()
    })
    it('Verify placeholder text of the input field',()=>{
        cy.visit('/AutomationPractice/');
      autoSuggestAction.validatePlaceHolderText();  
    })
    it('Click input',()=>{
        cy.visit('/AutomationPractice/');
       autoSuggestAction.clickOnCountryInput();

    })
    it('Enter valid text in the input field',()=>{
        cy.visit('/AutomationPractice/');
        autoSuggestAction.enterValidTextIntoInputField();

    })
    
    it('Enter partial text in the input field',()=>{
        cy.visit('/AutomationPractice/');
       autoSuggestAction.enterPartialTextIntoInputField()
    })
    it('Verify suggestion count',()=>{
     cy.visit('/AutomationPractice/');
     autoSuggestAction.validateSuggestionCount();
    })
        
})
