class WebTablePageElements {
    webTableTitle = () => cy.get('fieldset:has(.tableFixHead) legend');
}

export default WebTablePageElements;
