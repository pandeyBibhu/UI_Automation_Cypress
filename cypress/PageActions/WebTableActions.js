import WebTablePageElements from '../PageRepository/WebTablePageElements.js';

const webTable = new WebTablePageElements();

class WebTableActions {
    validateTitle() { webTable.webTableTitle().should('have.text', 'Web Table Fixed header'); }
}

export default WebTableActions;
