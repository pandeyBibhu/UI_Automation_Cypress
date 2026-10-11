//<reference types="cypress"/>
import AutoSuggestPageElements from '../PageRepository/AutoSuggestPageElements.js';

const autoSuggestElements = new AutoSuggestPageElements();

class AutoSuggestActions {

    validateAutoSuggestionTitle() {
        autoSuggestElements.suggestionSectionTitle().invoke('text').then((text) => {
            cy.log(text);
            expect(text.trim()).to.equal('Suggession Class Example');
        })
        autoSuggestElements.suggestionSectionTitle().should('have.text', 'Suggession Class Example');
    }

  validateInputFieldVisible(){
    autoSuggestElements.countryInput().should('be.visible');
  }
  validateInputFieldEnabled(){
    autoSuggestElements.countryInput().should('be.enabled');
  }
  validatePlaceHolderText(){
    autoSuggestElements.countryInput().should('have.attr','placeholder').and('contain','Type to Select Countries');
  }
  clickOnCountryInput(){
     autoSuggestElements.countryInput().then(($input)=>{
            if($input.is(':enabled')){
                cy.wrap($input).click();
            }else{
                cy.log('Input field is not clickable');
            }
        });
  }
  enterValidTextIntoInputField(){
    autoSuggestElements.countryInput().type('United States');
         
         autoSuggestElements.countrySuggestions().each($el=>{
            cy.wrap($el).should('contain.text','United States');
         })
  }
  enterPartialTextIntoInputField(){
     autoSuggestElements.countryInput().type('Ind');
        autoSuggestElements.countrySuggestions().each(($el,index,$list)=>{
            cy.wrap($el).should('contain.text','India');
            cy.wrap($el.text()).should('include','India');
         })
  }
  validateSuggestionCount(){
     autoSuggestElements.countryInput().type('India');
     autoSuggestElements.countrySuggestions().should('not.have.lengthOf.below', 1);
     autoSuggestElements.countrySuggestionItems().invoke('text').then((text)=>{
        cy.log(text);
        expect(text.trim()).to.equal('India');
     })  
    
  }
}
export default AutoSuggestActions;