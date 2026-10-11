class LoginShopversePage{
    userName=()=>cy.get('#userName',{timeout:10000}).should('be visible')
    password=()=>cy.get('#password',{timeout:10000}).should('be.visible')
    loginButton=()=>cy.get('#loginButton',{timeout:10000}).should('be.visible')
}

export default LoginShopversePage;