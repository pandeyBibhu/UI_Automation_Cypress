import DropdownPageElements from '../PageRepository/DropdownPageElements.js';

const dropdown = new DropdownPageElements();

class DropdownActions {
    validateTitle() {
        dropdown.dropdownTitle().should('have.text', 'Dropdown Example');
    }
    validateVisible() {
        dropdown.dropdown().should('be.visible');
    }
    validateEnabled() {
        dropdown.dropdown().should('be.enabled');
    }
    validateDefaultValue() {
        dropdown.dropdown().should('have.value', '').and('have.text', 'Select');
    }
    validateOptionCount(expectedCount = 4) {
        dropdown.dropdownOptions().should('have.length', expectedCount);
    }
    validateOptionTexts(expectedOptions = ['Select', 'Option1', 'Option2', 'Option3']) {
        dropdown.dropdownOptions()
            .each((option, index) => expect(option.text()).to.equal(expectedOptions[index]));
    }
    validateOptionOrder(expectedOrder = ['Select', 'Option1', 'Option2', 'Option3']) {
        dropdown.dropdownOptions().each((option, index) => expect(option.text()).to.equal(expectedOrder[index]));
    }
    validateNoDuplicateOptions() {
        const seen = new Set();
        dropdown.dropdownOptions().each((option) => {
            const text = option.text();
            expect(seen.has(text), `duplicate option: ${text}`).to.equal(false);
            seen.add(text);
        });
    }
    selectOption(optionText, expectedValue) {
        dropdown.dropdown().select(optionText);
        if (expectedValue !== undefined) dropdown.dropdown().should('have.value', expectedValue);
    }
    validateSelectedOptionText(optionText) {
        dropdown.selectedDropdownOption().should('have.text', optionText);
    }
    validateNoDisabledOptions() {
        dropdown.disabledDropdownOptions().should('not.exist');
    }
    validateInvalidOptionDoesNotExist() {
        dropdown.invalidDropdownOption().should('not.exist');
    }
    validateAccessibleDropdown() {
        dropdown.dropdown().should('have.id', 'dropdown-class-example').and('be.visible').and('be.enabled');
    }
    validateKeyboardNavigation() {
        dropdown.dropdown().focus().type('{downArrow}').should('have.value', 'option1')
            .type('{downArrow}').should('have.value', 'option2');
    }
}

export default DropdownActions;
