const page = require('../pages-objects/page');
const selector = require('../pages-objects/selector');

describe('Check if there is a console error when opening CabriExpress', () => {

    it('should open web site', () => {
        page.open('http://automationpractice.com/index.php');
        browser.maximizeWindow();
    });

    it('should wait for web site to be ready', () => {
        selector.waitForDisplayed(selector.logo);
    });

    it('should open web site', () => {
        selector.waitForClickable(selector.loginButton);
        selector.loginButton.click();
    });

    it('should open web site', () => {
        selector.waitForDisplayed(selector.emailInput);
        selector.emailInput.addValue('sihem.benaz@gmail.com');
    });

    it('should open web site', () => {
        selector.waitForClickable(selector.createAccountButton);
        selector.createAccountButton.click();
    });

    it('should open web site', () => {
        selector.waitForDisplayed(selector.firstNameInputForm);
    });

    //complete form
    it('should open web site', () => {
        selector.emailInputForm.scrollIntoView();
    });

    it('should open web site',  () => {
         browser.pause(3000);
        selector.waitForDisplayed(selector.emailInputForm);
        selector.emailInputForm.setValue('wrong.e-mailAddress');
        //selector.firstNameInputForm.click();
         browser.pause(3000);
        const colorEmail = selector.emailInputForm.getCSSProperty('color');
        expect(colorEmail.parsed.hex === '#f13340').toBeTruthy();

    });


});
