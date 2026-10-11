class CheckBoxPageElements {
    checkboxTitle = () => cy.get('fieldset:has(#checkBoxOption1) > legend');
    option1Checkbox = () => cy.get('#checkBoxOption1');
    option2Checkbox = () => cy.get('#checkBoxOption2');
    option3Checkbox = () => cy.get('#checkBoxOption3');
    checkboxLabels = () => cy.get('fieldset:has(#checkBoxOption1) label');
    option1Label = () => cy.get('label:has(#checkBoxOption1)');
    option2Label = () => cy.get('label:has(#checkBoxOption2)');
    option3Label = () => cy.get('label:has(#checkBoxOption3)');
    option1ByRole = () => cy.findByRole('checkbox', { name: 'Option1' });
    option2ByRole = () => cy.findByRole('checkbox', { name: 'Option2' });
    option3ByRole = () => cy.findByRole('checkbox', { name: 'Option3' });
    pageBody = () => cy.get('body');
}

export default CheckBoxPageElements;
