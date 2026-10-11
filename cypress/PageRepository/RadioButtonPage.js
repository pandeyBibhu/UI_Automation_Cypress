class RadioButtonPage{
Header=()=>cy.get('body h1',{timeout:1000}).should('be.visible');
textButton=()=>cy.get('#radio-btn-example fieldset legend')
radioButtonLabel=()=>cy.get('#radio-btn-example fieldset label',{timeout:1000})
radio1=()=>cy.get('#radio-btn-example fieldset label input[value="radio1"]',{timeout:1000}).should('be.enabled')
radio2=()=>cy.get('#radio-btn-example fieldset label input[value="radio2"]',{timeout:1000}).should('be.enabled')
radio3=()=>cy.get('#radio-btn-example fieldset label input[value="radio3"]',{timeout:1000}).should('be.enabled')
radioButtonList=()=>cy.get('#radio-btn-example fieldset label input',{timeout:1000})
}
export default RadioButtonPage;