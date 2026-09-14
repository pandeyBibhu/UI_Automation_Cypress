///<reference types="cypress" />
describe('Dropdown Handling', () => {
    beforeEach(()=>{
        cy.visit('/');
    })

    it('Verify the dropdown title',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('fieldset:has(#dropdown-class-example) > legend').invoke('text').then((text)=>{
            cy.log(text);
            expect(text.trim()).to.equal('Dropdown Example');
        })
    })
    it(' Verify dropdown is visible',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#dropdown-class-example').should('be.visible');
    })
    it('Verify dropdown is enabled ',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#dropdown-class-example').should('be.enabled');
    })
    it('Verify default value',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#dropdown-class-example').should('have.value',''). and('have.text','Select');
    })
    it('Verify option count in the dropdown',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#dropdown-class-example option').should('have.length',4)
        .then((options)=>{
            cy.log('Total options in the dropdown are: '+options.length);
        }
    )
    })
    it('Verify option text in the dropdown',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#dropdown-class-example option').each((option)=>{
            cy.log(option.text());
            const optionsList = ['Select','Option1','Option2','Option3'];
            optionsList.forEach((opt)=>{
                if(option.text() === opt){
                    expect(option.text()).to.equal(opt);
                }           
            })
        })
    })
    it('Verify option order in the dropdown',()=>{
        cy.visit('/AutomationPractice/');
        const expectedOrder = ['Select','Option1','Option2','Option3'];
        cy.get('#dropdown-class-example option').each((option,index)=>{
            expect(option.text()).to.equal(expectedOrder[index]);
        })
    })
    it('Verify no duplicate options in the dropdown',()=>{
        cy.visit('/AutomationPractice/');
        const optionsSet = new Set();
        cy.get('#dropdown-class-example option').each((option)=>{
            const optionText = option.text();
            if(optionsSet.has(optionText)){
                expect.fail('Duplicate option found: '+optionText);
            }
            optionsSet.add(optionText);

        })
            
    })
    it('Select first option',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1');
        cy.get('#dropdown-class-example').find('option:selected').should('have.text','Option1');
        cy.get('#dropdown-class-example').click().then((selectOption)=>{
            const selectedOption = selectOption.find('option:selected').text();
            cy.log('Selected option is: '+selectedOption);
            expect(selectedOption).to.equal('Option1');
        })

        cy.get('#dropdown-class-example').click().then(($element)=>{
            const selectOpetion=$element.find('option:selected').text();
            if(selectOpetion === 'Option1'){
                cy.log('Selected option is: '+selectOpetion);
            }
        })
    })

    
})