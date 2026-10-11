///<reference types="cypress" />
import DropdownActions from '../../PageActions/DropdownActions.js';

const dropdownActions = new DropdownActions();

describe('Dropdown Handling', () => {
    beforeEach(()=>{
        cy.visit('/');
    })

    it('Verify the dropdown title',()=>{
        cy.visit('/AutomationPractice/');
        dropdownActions.validateTitle();
    })
    it(' Verify dropdown is visible',()=>{
        cy.visit('/AutomationPractice/');
        dropdownActions.validateVisible();
    })
    it('Verify dropdown is enabled ',()=>{
        cy.visit('/AutomationPractice/');
        dropdownActions.validateEnabled();
    })
    it('Verify default value',()=>{
        cy.visit('/AutomationPractice/');
        dropdownActions.validateDefaultValue();
    })
    it('Verify option count in the dropdown',()=>{
        cy.visit('/AutomationPractice/');
        dropdownActions.validateOptionCount();
    })
    it('Verify option text in the dropdown',()=>{
        cy.visit('/AutomationPractice/');
        dropdownActions.validateOptionTexts();
    })
    it('Verify option order in the dropdown',()=>{
        cy.visit('/AutomationPractice/');
        dropdownActions.validateOptionOrder();
    })
    it('Verify no duplicate options in the dropdown',()=>{
        cy.visit('/AutomationPractice/');
        dropdownActions.validateNoDuplicateOptions();
            
    })
    it('Select first option',()=>{
        cy.visit('/AutomationPractice/');
        dropdownActions.selectOption('Option1', 'option1');
    })
      it('Select middle option',()=>{
        cy.visit('/AutomationPractice/');
        dropdownActions.selectOption('Option2', 'option2');
    })
    it('Select last option ',()=>{
        cy.visit('/AutomationPractice/');
        dropdownActions.selectOption('Option3', 'option3');
    })
    
it('Verify selected option text in the dropdown',()=>{
    cy.visit('/AutomationPractice/');
    dropdownActions.selectOption('Option2', 'option2');
    dropdownActions.validateSelectedOptionText('Option2');
})

it('Verify selected option value',()=>{
    cy.visit('/AutomationPractice/');
    dropdownActions.selectOption('Option2', 'option2');
})

it('Change selected option',()=>{
    cy.visit('/AutomationPractice/');
    dropdownActions.selectOption('Option1', 'option1');
    dropdownActions.selectOption('Option3', 'option3');
})

it('Select default option',()=>{
    cy.visit('/AutomationPractice/');
    dropdownActions.selectOption('Select', '');
    dropdownActions.validateSelectedOptionText('Select');
})

it('Select same option repeatedly',()=>{
    cy.visit('/AutomationPractice/');
    dropdownActions.selectOption('Option2', 'option2');
    dropdownActions.selectOption('Option2', 'option2');
})

it('Keyboard navigation',()=>{
    cy.visit('/AutomationPractice/');
    dropdownActions.validateKeyboardNavigation();
})

it('Verify disabled option',()=>{
    cy.visit('/AutomationPractice/');
    dropdownActions.validateNoDisabledOptions();
})

it('Verify invalid option',()=>{
    cy.visit('/AutomationPractice/');
    dropdownActions.validateInvalidOptionDoesNotExist();
    dropdownActions.selectOption('Option1', 'option1');
})

it('Verify dropdown accessibility',()=>{
    cy.visit('/AutomationPractice/');
    dropdownActions.validateAccessibleDropdown();
})

    
})
