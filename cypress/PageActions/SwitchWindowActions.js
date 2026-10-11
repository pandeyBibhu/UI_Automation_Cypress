import SwitchWindowPageElements from '../PageRepository/SwitchWindowPageElements.js';

const switchWindow = new SwitchWindowPageElements();

class SwitchWindowActions {
    validateWindowSectionTitle() { switchWindow.windowSectionTitle().should('have.text', 'Switch Window Example'); }
    validateOpenWindowButton() {
        switchWindow.openWindowButton().should('be.visible').and('be.enabled').and('have.text', 'Open Window');
    }
    validateOpenWindow() {
        cy.window().then((win) => cy.stub(win, 'open').as('openWindow'));
        switchWindow.openWindowButton().click();
        cy.get('@openWindow').should('be.called').then((stub) => {
            expect(stub.getCall(0).args[0]).to.equal('http://www.qaclickacademy.com/');
        });
    }
    validateTabLink() { switchWindow.openTabLink().should('have.attr', 'href', 'https://www.qaclickacademy.com'); }
    openTabInCurrentWindow() {
        switchWindow.openTabLink().should('have.attr', 'href', 'https://www.qaclickacademy.com')
            .invoke('removeAttr', 'target').click();
    }
    validateTabSectionTitle() { switchWindow.tabSectionTitle().should('have.text', 'Switch Tab Example'); }
}

export default SwitchWindowActions;
