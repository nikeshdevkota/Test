const registerLocators = {
    registerUrl: "register.htm",
    header: "h1",
    headerText: "Signing up is easy!",
    tableClass: "[class='form2']",
    registerParagraph: "div[id='rightPanel'] p",
    registerParagraphText: "If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.",
    phoneElement: "tr:nth-child(7) td:nth-child(1)",
    phoneText: "Phone",
    phoneInput: "[id ='customer.phoneNumber']",
    usernameElement: "tr:nth-child(10) td:nth-child(1)",
    usernameText: "Username",
    usernameInput: "[id='customer.username']",
    passwordElement: "tr:nth-child(11) td:nth-child(1)",
    passwordText: "Password",
    passwordInput: "[id='customer.password']",
    confirmPasswordElement: "tr:nth-child(12) td:nth-child(1)",
    confirmPasswordText: "Confirm",
    confirmPasswordInput: "#repeatedPassword",
    loginTitleId: ".title",
    loginTitleMessage: "Welcome",
    loginParagraphText : "Your account was created successfully. You are now logged in."

};

const customerRegisterEmptyErrors = {
    usernameErrorId:"[id='customer.username.errors']",
    usernameErrorMessage: "Username is required.",
    passwordErrorId:"[id='customer.password.errors']",
    passwordErrorMessage: "Password is required.",
    repeatedPasswordErrorId:"[id='repeatedPassword.errors']",
    repeatedPasswordErrorMessage: "Password confirmation is required.",
   
}

const customerRegisterInvalidErrors = {
    usernameExistsId:"[id='customer.username.errors']",
    usernameExistsMessage: "This username already exists.",
    differentPasswordsId: "[id='repeatedPassword.errors']",
    differentPasswordsMessage: "Passwords did not match."
}

export {registerLocators,customerRegisterEmptyErrors,customerRegisterInvalidErrors}