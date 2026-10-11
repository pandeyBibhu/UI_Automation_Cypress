import SwitchAlertActions from '../../PageActions/SwitchAlertActions.js';

const switchAlertActions = new SwitchAlertActions();

describe('TC6 - Switch To Alert', () => {
	const url = 'https://rahulshettyacademy.com/AutomationPractice/';
	const testName = 'Rahul';

	beforeEach(() => {
		cy.visit(url);
	});

	it('1. Verify page heading', () => {
        cy.visit('/AutomationPractice/');
        switchAlertActions.validateTitle();
		
	});

	it('2. Verify input field is visible', () => {
		switchAlertActions.validateInputVisible();
	});

	it('3. Verify input field is enabled', () => {
		switchAlertActions.validateInputEnabled();
		switchAlertActions.enterName(testName);
	});

	it('4. Verify input placeholder', () => {
		switchAlertActions.validateInputPlaceholder();
	});

	it('5. Enter valid name', () => {
		switchAlertActions.enterName(testName);
	});

	it('6-8. Click Alert, verify message, and accept Alert', () => {
        const alertName = 'Bibhu';
        const expectedMessage =
            `Hello ${alertName}, share this practice page and share your knowledge`;

		switchAlertActions.enterName(alertName);
		switchAlertActions.validateAlertMessage(expectedMessage);
    });

	it('9-11. Click Confirm, verify message, and accept dialog', () => {
		switchAlertActions.enterName(testName);
		switchAlertActions.validateConfirmMessage(`Hello ${testName}, Are you sure you want to confirm?`);
		switchAlertActions.validateConfirmButton();
	});

	it('12. Dismiss Confirm dialog', () => {
		switchAlertActions.enterName(testName);
		switchAlertActions.validateConfirmMessage(`Hello ${testName}, Are you sure you want to confirm?`, false);
		switchAlertActions.validateConfirmButton();
	});

	it('13. Click Alert without entering name', () => {
		switchAlertActions.validateAlertMessageContaining('Hello');
	});

	it('14. Click Confirm without entering name', () => {
		switchAlertActions.validateConfirmMessageContaining('Hello');
	});

	it('15. Replace entered name', () => {
		switchAlertActions.replaceName('Old Name', 'New Name');
	});

	it('16. Enter special characters', () => {
		const specialName = "Test @#$% & Co.";
		switchAlertActions.enterName(specialName);
	});

	it('17. Enter long text', () => {
		const longName = 'A'.repeat(255);
		switchAlertActions.enterName(longName);
	});
});
