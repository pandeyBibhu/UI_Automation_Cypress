class DropdownPageElements {
    dropdownTitle = () => cy.get('fieldset:has(#dropdown-class-example) > legend');
    dropdown = () => cy.get('#dropdown-class-example');
    dropdownOptions = () => cy.get('#dropdown-class-example option');
    disabledDropdownOptions = () => cy.get('#dropdown-class-example option:disabled');
    invalidDropdownOption = () => cy.get('#dropdown-class-example option[value="invalid-option"]');
    selectedDropdownOption = () => cy.get('#dropdown-class-example option:selected');
}

export default DropdownPageElements;
