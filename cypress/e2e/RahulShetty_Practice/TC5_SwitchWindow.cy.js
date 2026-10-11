///<reference types="cypress" />
import SwitchWindowActions from '../../PageActions/SwitchWindowActions.js';

const switchWindowActions = new SwitchWindowActions();

describe("Switch WIndow Handling", () => {
  beforeEach(() => {
    cy.visit("/");
  })
  it('Verify the switch window title header', () => {
    cy.visit("/AutomationPractice/");
    switchWindowActions.validateWindowSectionTitle();
  })
  it('verify open window button is visible', () => {
    cy.visit("/AutomationPractice/");
    switchWindowActions.validateOpenWindowButton();
  })
  it('verify open window button is enabled and interacted with', () => {
    cy.visit("/AutomationPractice/");
    switchWindowActions.validateOpenWindowButton();
  })
  it('verify open window button is clicked and new window is opened', () => {
    cy.visit("/AutomationPractice/");
    switchWindowActions.validateOpenWindow();
    cy.url().should('include', 'https://rahulshettyacademy.com/AutomationPractice/');
  });

  it('verify switch window Tab functionality', () => {
    cy.visit("/AutomationPractice/");
   
    switchWindowActions.openTabInCurrentWindow();
    cy.url().should('eq', 'https://www.qaclickacademy.com/');
    cy.wait(5000);
    cy.go('back');
    cy.url().should('include', 'https://rahulshettyacademy.com/AutomationPractice/');
  })

  it('verify Header title of Switch Window Tab', () => {
    cy.visit("/AutomationPractice/");
    switchWindowActions.validateTabSectionTitle();
  })
});
