///<reference types="cypress" />
describe('Dropdown Handling', () => {
    beforeEach(()=>{
        cy.visit('/');
    })

    it.skip('Verify the dropdown title',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('fieldset:has(#dropdown-class-example) > legend').invoke('text').then((text)=>{
            cy.log(text);
            expect(text.trim()).to.equal('Dropdown Example');
        })
    })
    it.skip(' Verify dropdown is visible',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#dropdown-class-example').should('be.visible');
    })
    it.skip('Verify dropdown is enabled ',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#dropdown-class-example').should('be.enabled');
    })
    it.skip('Verify default value',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#dropdown-class-example').should('have.value',''). and('have.text','Select');
    })
    it.skip('Verify option count in the dropdown',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#dropdown-class-example option').should('have.length',4)
        .then((options)=>{
            cy.log('Total options in the dropdown are: '+options.length);
        }
    )
    })
    it.skip('Verify option text in the dropdown',()=>{
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
    it.skip('Verify option order in the dropdown',()=>{
        cy.visit('/AutomationPractice/');
        const expectedOrder = ['Select','Option1','Option2','Option3'];
        cy.get('#dropdown-class-example option').each((option,index)=>{
            expect(option.text()).to.equal(expectedOrder[index]);
        })
    })
    it.skip('Verify no duplicate options in the dropdown',()=>{
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
    it.skip('Select first option',()=>{
        cy.visit('/AutomationPractice/');
        // cy.get('#dropdown-class-example').select('Option1').should('have.value','option1');
        cy.get('#dropdown-class-example option').each(($options)=>{
            const optionValue = $options.val();
            cy.log("Option value is: "+optionValue);
            if(optionValue === 'option2'){
                cy.get('#dropdown-class-example').select('Option2');
            }
        })
})
      it.skip('Select middle option',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#dropdown-class-example option').each(($options)=>{
            const optionValue = $options.val();
            cy.log("Option value is: "+optionValue);
            if(optionValue === 'option2'){
                cy.get('#dropdown-class-example').select('Option2').should('have.value','option2');
            }
      })  
    })
    it.skip('Select last option ',()=>{
        cy.visit('/AutomationPractice/');
        cy.get('#dropdown-class-example option').each(($options)=>{
            const optionValue = $options.val();
            cy.log("Option value is: "+optionValue);
            if(optionValue === 'option3'){
                cy.get('#dropdown-class-example').select('Option3').should('have.value','option3');
            }
      })
    })
    
it.skip('Verify selected option text in the dropdown',()=>{
    cy.visit('/AutomationPractice/');
    cy.get('#dropdown-class-example').select('Option2').should('have.value','option2');
})

it('Verify selected option value',()=>{
    cy.visit('/AutomationPractice/');
    cy.get('#dropdown-class-example')
        .select('Option2')
        .should('have.value','option2');
})

it('Change selected option',()=>{
    cy.visit('/AutomationPractice/');
    cy.get('#dropdown-class-example')
        .select('Option1')
        .should('have.value','option1')
        .select('Option3')
        .should('have.value','option3');
})

it('Select default option',()=>{
    cy.visit('/AutomationPractice/');
    cy.get('#dropdown-class-example')
        .select('Select')
        .should('have.value','')
        .find('option:selected')
        .should('have.text','Select');
})

it('Select same option repeatedly',()=>{
    cy.visit('/AutomationPractice/');
    cy.get('#dropdown-class-example')
        .select('Option2')
        .should('have.value','option2')
        .select('Option2')
        .should('have.value','option2');
})

it('Keyboard navigation',()=>{
    cy.visit('/AutomationPractice/');
    cy.get('#dropdown-class-example')
        .focus()
        .type('{downArrow}')
        .should('have.value','option1')
        .type('{downArrow}')
        .should('have.value','option2');
})

it('Verify disabled option',()=>{
    cy.visit('/AutomationPractice/');
    cy.get('#dropdown-class-example option:disabled').should('not.exist');
})

it('Verify invalid option',()=>{
    cy.visit('/AutomationPractice/');
    cy.get('#dropdown-class-example option[value="invalid-option"]').should('not.exist');
    cy.get('#dropdown-class-example')
        .select('Option1')
        .should('have.value','option1');
})

it('Verify dropdown accessibility',()=>{
    cy.visit('/AutomationPractice/');
    cy.findByRole('combobox')
        .should('have.id','dropdown-class-example')
        .and('be.visible')
        .and('be.enabled');
})

    
})