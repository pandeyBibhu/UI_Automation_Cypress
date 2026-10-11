
import LoginShopversePage from "../PageRepository/LoginShopversePage.js"

const loginPage=new LoginShopversePage();
class LoginShopVerseAction{
    enterUserName(){
        loginPage.userName().type("Bibu")
        loginPage.password().type("password")
        loginPage.loginButton().click({force:true})
    }
     enterPassword(){
        
        loginPage.password().type("password")
        
    }
     logintoApplication(){
        loginPage.userName().type("Bibu")
        loginPage.password().type("password")
        loginPage.loginButton().click({force:true})
    }

    
}
