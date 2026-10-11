///<reference types="cypress"/>
import RadioButtonAction from "../../PageActions/RadioButtonAction";
import RadioButtonPage from "../../PageRepository/RadioButtonPage";
const radioButtonAction=new RadioButtonAction();

describe("Web Elements Handling ()",()=>{
    beforeEach(()=>{
        cy.visit('/');
    })
    it('verify header of the page',()=>{
       let titleText= cy.title().should('eq','Rahul Shetty Academy | QA Automation, Playwright, AI Testing & Online Training');
        let header=radioButtonAction.getHeaderOfPage();
        cy.log(header);
       
    })
    it('verify title of the Radio button',()=>{
        cy.visit('/AutomationPractice/');
        radioButtonAction.getTextOfButton();
    })
    it('verify radio button list',()=>{
        cy.visit('/AutomationPractice/');
        radioButtonAction.getRadioButtonList();
    })
    it("verify radio button is enabled/disabled",()=>{
        cy.visit('/AutomationPractice/');
        radioButtonAction.IsRadioButtonListEnabled(); 
        
    })
    it("verify Radio button is selected or not",()=>{
        cy.visit('/AutomationPractice/');
        radioButtonAction.IsRadioButtonListSelected()
    }
)
    it("Radio Button Handling",()=>{
        cy.visit('/AutomationPractice/');
        let pageTitle = cy.title();
        cy.log(pageTitle);
        expect(pageTitle).to.equal(pageTitle);
        
    })
})