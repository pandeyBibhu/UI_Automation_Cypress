import SwitchAlertPageElements from '../PageRepository/SwitchAlertPageElements.js';

const switchAlert = new SwitchAlertPageElements();

class SwitchAlertActions {
    validateTitle() { switchAlert.alertSectionTitle().should('have.text', 'Switch To Alert Example'); }
    validateInputVisible() { switchAlert.nameInput().should('be.visible'); }
    validateInputEnabled() { switchAlert.nameInput().should('be.enabled'); }
    validateInputPlaceholder() { switchAlert.nameInput().should('have.attr', 'placeholder', 'Enter Your Name'); }
    enterName(name) { switchAlert.nameInput().clear().type(name).should('have.value', name); }
    clickAlert() { switchAlert.alertButton().click(); }
    clickConfirm() { switchAlert.confirmButton().click(); }
    validateAlertMessage(expectedMessage) {
        cy.window().then((win) => cy.stub(win, 'alert').as('alert'));
        this.clickAlert();
        cy.get('@alert').should('have.been.calledOnce').and('have.been.calledWith', expectedMessage);
    }
    validateAlertMessageContaining(expectedText) {
        cy.on('window:alert', (message) => expect(message).to.contain(expectedText));
        this.clickAlert();
    }
    validateConfirmMessage(expectedMessage, accept = true) {
        cy.on('window:confirm', (message) => { expect(message).to.equal(expectedMessage); return accept; });
        this.clickConfirm();
    }
    validateConfirmMessageContaining(expectedText, accept = true) {
        cy.on('window:confirm', (message) => { expect(message).to.contain(expectedText); return accept; });
        this.clickConfirm();
    }
    validateConfirmButton() { switchAlert.confirmButton().should('have.value', 'Confirm'); }
    replaceName(oldName, newName) {
        switchAlert.nameInput().type(oldName).clear().type(newName).should('have.value', newName);
    }
}

export default SwitchAlertActions;
