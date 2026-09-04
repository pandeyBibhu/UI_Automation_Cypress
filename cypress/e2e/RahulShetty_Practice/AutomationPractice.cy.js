describe("Web Elements Handling ()",()=>{
    beforeEach(()=>{
        cy.visit('/');
    })

    it("Radio Button Handling",()=>{
        cy.visit('/AutomationPractice/');
        let pageTitle = cy.title();
        cy.log(pageTitle);
        expect(pageTitle).to.equal(pageTitle);
        cy.findByRole('radio',{name:'Radio1'}).check().should('be.checked');    
        cy.findAllByRole('radio').should('have.length',3);
        cy.findByText('Radio2').should('be.visible').check().should('be.checked');
        cy.findByText('Radio3').should('be.visible').check().should('be.checked');
    })
})