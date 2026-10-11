class SwitchWindowPageElements {
    windowSectionTitle = () => cy.get('fieldset:has(#openwindow) > legend');
    openWindowButton = () => cy.get('#openwindow');
    openTabLink = () => cy.get('fieldset:has(#opentab) a');
    tabSectionTitle = () => cy.get('fieldset:has(#opentab) legend');
}

export default SwitchWindowPageElements;
