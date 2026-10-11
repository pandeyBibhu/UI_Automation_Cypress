import CheckBoxPageElements from '../PageRepository/CheckBoxPageElements.js';

const checkbox = new CheckBoxPageElements();

class CheckBoxActions {
    validateTitle() { checkbox.checkboxTitle().should('have.text', 'Checkbox Example'); }
    option(number) { return checkbox[`option${number}Checkbox`](); }
    validateVisible(number) { this.option(number).should('be.visible'); }
    validateEnabled(number) { this.option(number).should('be.enabled'); }
    validateDefaultState(number) { this.option(number).should('not.be.checked'); }
    select(number) { this.option(number).check().should('be.checked'); }
    deselect(number) { this.option(number).uncheck().should('not.be.checked'); }
    toggle(number) { this.option(number).check().should('be.checked').uncheck().should('not.be.checked'); }
    toggleBasedOnCurrentState(number) {
        this.option(number).then(($checkbox) => {
            if ($checkbox.is(':checked')) this.option(number).uncheck().should('not.be.checked');
            else this.option(number).check().should('be.checked');
        });
    }
    clickSelectedToDeselect(number) { this.option(number).check().click().should('not.be.checked'); }
    selectMultiple(numbers) { numbers.forEach((number) => this.option(number).check()); }
    validateSelectedState(selectedNumbers = []) {
        [1, 2, 3].forEach((number) => this.option(number).should(selectedNumbers.includes(number) ? 'be.checked' : 'not.be.checked'));
    }
    validateLabels() {
        const expected = ['Option1', 'Option2', 'Option3'];
        checkbox.checkboxLabels().should('have.length', expected.length).each((label, index) => {
            expect(label.textContent.trim()).to.equal(expected[index]);
        });
    }
    clickLabel(number) { checkbox[`option${number}Label`]().click(); this.option(number).should('be.checked'); }
    selectWithKeyboard(number = 1) { this.option(number).focus().type(' ').should('be.checked'); }
    deselectWithKeyboard(number = 1) { this.option(number).check().focus().type(' ').should('not.be.checked'); }
    validateFocus(number = 1) { this.option(number).focus().should('have.focus'); }
    validateTabOrder() { [1, 2, 3].forEach((number) => this.validateFocus(number)); }
    validateAccessibility() { [1, 2, 3].forEach((number) => checkbox[`option${number}ByRole`]().should('exist')); }
    validateCheckedProperty(number = 1, checked = true) { this.option(number).should('have.prop', 'checked', checked); }
    validateIndependentSelection() {
        this.select(1); this.validateSelectedState([1]);
        this.select(2); this.validateSelectedState([1, 2]);
    }
    validateClickOutsideKeepsState(number = 1) {
        this.select(number); checkbox.pageBody().click(0, 0); this.option(number).should('be.checked');
    }
    validateRefreshResets(number = 1) {
        this.select(number); cy.reload(); this.option(number).should('not.be.checked');
    }
    validateAllCombinations() {
        const combinations = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]];
        combinations.forEach((selectedNumbers) => {
            cy.visit('/AutomationPractice/');
            this.selectMultiple(selectedNumbers);
            this.validateSelectedState(selectedNumbers);
        });
    }
}

export default CheckBoxActions;
