///<reference types="cypress"/>
describe("Web Elements Handling ()",()=>{
    beforeEach(()=>{
        cy.visit('/');
    })
    it('verify header of the page',()=>{
        cy.title().should('include','Rahul Shetty Academy | QA Automation, Playwright, AI Testing & Online Training');
        let header=cy.get('body h1');
        cy.log(header);
        // expect(header).to.equal('Practice Page');
    })
    it('verify title of the Radio button',()=>{
        cy.visit('/AutomationPractice/');
        let textButton=cy.get('#radio-btn-example fieldset legend');
        cy.log(textButton);
        textButton.should('have.text','Radio Button Example');

    })
    it('verify radio button list',()=>{
        const radioButtonList=['Radio1','Radio2','Radio3'];
        cy.visit('/AutomationPractice/');
        cy.findAllByRole('radio').should('have.length',3);
        cy.get('#radio-btn-example fieldset label').should('have.length',3);
        cy.get('#radio-btn-example fieldset label').each(($el,index,$list)=>{
            cy.log($el.text());
            expect($el.text().trim()).to.equal(radioButtonList[index]);
        })
    })
    it("verify radio button is enabled/disabled",()=>{
        const radioButtonList=['Radio1','Radio2','Radio3'];
        cy.visit('/AutomationPractice/');
        cy.get('#radio-btn-example fieldset label input[value="radio1"]').should('be.enabled');
        cy.get('#radio-btn-example fieldset label input[value="radio2"]').should('be.enabled');
        cy.get('#radio-btn-example fieldset label input[value="radio3"]').should('be.enabled');

        cy.get('#radio-btn-example fieldset label input').each(($el,index,$list)=>{
            if($el.is(':enabled')){
                cy.log($el.val()+' is enabled');
            }
        })
        
    })
    it("verify Radio button is selected or not",()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#radio-btn-example fieldset label input[value="radio1"]').check().should('be.checked');
        cy.get('#radio-btn-example fieldset label input[value="radio2"]').should('not.be.checked');
        cy.get('#radio-btn-example fieldset label input[value="radio3"]').should('not.be.checked');
        cy.get('#radio-btn-example fieldset label input ').each(($el,index,$list)=>{
            if($el.is(':checked')){
                cy.log($el.val()+' is checked');
            }else{
                cy.log($el.val()+' is not checked');
            }
        })
    }
)
    it("Radio Button Handling",()=>{
        cy.visit('/AutomationPractice/');
        let pageTitle = cy.title();
        cy.log(pageTitle);
        expect(pageTitle).to.equal(pageTitle);
        
    })
})