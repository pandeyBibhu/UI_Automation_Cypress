///<reference types="cypress"/>
import RadioButtonPage from "../PageRepository/RadioButtonPage.js"

const radioButton=new RadioButtonPage();
const radioButtonList=['Radio1','Radio2','Radio3'];
class RadioButtonAction{

    getHeaderOfPage(){
        radioButton.Header()
    }
    getTextOfButton(){
     radioButton.textButton().should('have.text','Radio Button Example');
    }

    getRadioButtonList(){
        radioButton.radioButtonLabel().should('have.length',3);
        radioButton.radioButtonLabel().each(($el,index,$list)=>{
            cy.log($el.text());
            expect($el.text().trim()).to.equal(radioButtonList[index]);
        })
    }

    IsRadioButtonListEnabled(){
        radioButton.radio1();//Individual validate of each radio button
        radioButton.radio2();
        radioButton.radio3();
        //Validating all radioButton at once using loop
        radioButton.radioButtonList().each(($el,index,$list)=>{
            if($el.is(':enabled')){
                cy.log($el.val()+' is enabled');
            }
        })
    }
    IsRadioButtonListSelected(){
        radioButton.radio1().check().should('be.checked');
        radioButton.radio2().should('not.be.checked');
        radioButton.radio3().should('not.be.checked');
        radioButton.radioButtonList().each(($el,index,$list)=>{
            if($el.is(':checked')){
                cy.log($el.val()+' is checked');
            }else{
                cy.log($el.val()+' is not checked');
            }
        })
    }
    

}
export default RadioButtonAction;