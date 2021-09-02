class Selector {
    get loginButton(){
        return $('.login');
    }

    get logo(){
        return $('.logo.img-responsive');
    }

    get createAccountButton(){
        return $('.btn.btn-default.button.button-medium.exclusive');
    }

    get emailInput(){
        return $('.is_required.validate.account_input.form-control');
    }

    get firstNameInputForm(){
        return $('#customer_firstname');
    }

    get lastNameInputForm(){
        return $('#customer_lastname');
    }

    get emailInputForm(){
        return $('#email');
    }

    get passwordInputForm(){
        return $('#passwd');
    }
    get submitButton(){
        return $('#submit');
    }

    waitForClickable(selector) {
        selector.waitForClickable({timeout: 30000});
    }

    waitForDisplayed(selector) {
        selector.waitForDisplayed({timeout: 30000});
    }

}
module.exports = new Selector();