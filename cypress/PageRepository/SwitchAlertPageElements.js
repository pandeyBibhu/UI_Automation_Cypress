class SwitchAlertPageElements {
    alertSectionTitle = () => cy.get('fieldset:has(#name) legend');
    nameInput = () => cy.get('input[name="enter-name"]');
    alertButton = () => cy.get('input[value="Alert"]');
    confirmButton = () => cy.get('input[value="Confirm"]');
}

export default SwitchAlertPageElements;
