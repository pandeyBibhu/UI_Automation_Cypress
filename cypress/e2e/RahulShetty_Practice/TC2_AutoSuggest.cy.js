//<reference types="cypress"/>
describe('AutoSuggestion Handling', () => {
    beforeEach(()=>{
        cy.visit('/');
    })
    it.skip('verify the AutoSuggestion title',(()=>{
          cy.visit('/AutomationPractice/');
          cy.get('#select-class-example fieldset legend').invoke('text').then((text)=>{
            cy.log(text);
            expect(text.trim()).to.equal('Suggession Class Example');
          })

          cy.get('#select-class-example fieldset legend').should('have.text','Suggession Class Example');
    }))
    it.skip('Verify input field is visible',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#autocomplete').should('be.visible');
    })
    it.skip('Verify input is enabled',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#autocomplete').should('be.enabled');
    })
    it.skip('Verify placeholder text of the input field',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#autocomplete').should('have.attr','placeholder').and('contain','Type to Select Countries');
    })
    it.skip('Click input',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#autocomplete').then(($input)=>{
            if($input.is(':enabled')){
                cy.wrap($input).click();
            }else{
                cy.log('Input field is not clickable');
            }
        });

    })
    it.skip('Enter valid text in the input field',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#autocomplete').type('United States');
         
         cy.get('.ui-menu-item').each($el=>{
            cy.wrap($el).should('contain.text','United States');
         })

    })
    
    it.skip('Enter partial text in the input field',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#autocomplete').type('Ind');
        cy.get('.ui-menu-item').each(($el,index,$list)=>{
            cy.wrap($el).should('contain.text','India');
            cy.wrap($el.text()).should('include','India');
         })
    })
    it('Verify suggestion count',()=>{
     cy.visit('/AutomationPractice/');
     cy.get('#autocomplete').type('India');
     cy.get('.ui-menu-item').should('not.have.lengthOf.below', 1);
     cy.get('ul.ui-autocomplete li.ui-menu-item').invoke('text').then((text)=>{
        cy.log(text);
        expect(text.trim()).to.equal('India');
     })  
    })
        
})