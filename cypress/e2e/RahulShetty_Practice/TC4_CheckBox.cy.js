/// <reference types="cypress" />
import CheckBoxActions from '../../PageActions/CheckBoxActions.js';

const checkboxActions = new CheckBoxActions();

describe('Checkbox Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Verify checkbox header', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.validateTitle();
    })
    it('Verify Option1 checkbox is visible', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.validateVisible(1);

    })
    it('Verify Option2 checkbox is visible', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.validateVisible(2);

    })
    it('Verify Option3 checkbox is visible', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.validateVisible(3);

    })
    it('Verify Option1 checkbox is enabled', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.validateEnabled(1);
    })
    it('Verify Option2 checkbox is enabled', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.validateEnabled(2);
    })
    it('Verify Option3 checkbox is enabled', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.validateEnabled(3);
    })
    it('Verify default state of checkboxes', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.validateSelectedState();
    })
    it('Select Option1 ', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.select(1);
    })
    it('Select Option2 ', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.select(2);
    })
    it('Select Option3 ', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.select(3);
    })
    it('Deselect Option1 ', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.select(1);
        checkboxActions.deselect(1);
    })
    it('Deselect Option2 ', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.select(2);
        checkboxActions.deselect(2);
    })
    it('Deselect Option3 ', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.select(3);
        checkboxActions.deselect(3);
    })
    it('Verify toggle functionality of checkboxes', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.toggle(1);
        checkboxActions.toggle(2);
        checkboxActions.toggle(3);
    })
    it('check if checkboxes selected then deselect or if not selected then select', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.toggleBasedOnCurrentState(1);
    });

    it('Select Option1 and Option2', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.selectMultiple([1, 2]);
        checkboxActions.validateSelectedState([1, 2]);
    })

    it('Select Option1 and Option3', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.selectMultiple([1, 3]);
        checkboxActions.validateSelectedState([1, 3]);
    })

    it('Select Option2 and Option3', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.selectMultiple([2, 3]);
        checkboxActions.validateSelectedState([2, 3]);
    })

    it('Click selected checkbox again', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.clickSelectedToDeselect(1);
    })

    it('Verify checkbox independence', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.validateIndependentSelection();
    })

    it('Verify checkbox label text', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.validateLabels();
    })

    it('Click Option1 label', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.clickLabel(1);
    })

    it('Click Option2 label', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.clickLabel(2);
    })

    it('Click Option3 label', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.clickLabel(3);
    })

    it('Verify keyboard navigation', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.validateTabOrder();
    })

    it('Verify keyboard selection', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.selectWithKeyboard(1);
    })

    it('Verify keyboard deselection', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.deselectWithKeyboard(1);
    })

    it('Verify tab order', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.validateTabOrder();
    })

    it('Verify focus indication', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.validateFocus(1);
    })

    it('Verify checkbox accessibility', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.validateAccessibility();
    })

    it('Verify checkbox state', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.validateCheckedProperty(1, true);
    })

    it('Verify unchecked state', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.validateCheckedProperty(1, false);
    })

    it('Verify page refresh behavior', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.validateRefreshResets(1);
    })

    it('Verify clicking outside checkbox', () => {
        cy.visit('/AutomationPractice/');
        checkboxActions.validateClickOutsideKeepsState(1);
    })

    it('Verify all possible combinations', () => {
        checkboxActions.validateAllCombinations();
    })

}) 
