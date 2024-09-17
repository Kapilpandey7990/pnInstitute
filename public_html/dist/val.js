function validateGmailAndPhoneForm(formId, emailId, emailErrorId, phoneId, phoneErrorId) {
    document.getElementById(formId).addEventListener('submit', function(event) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        const phonePattern = /^[6-9]\d{9}$/;
        
        const emailInput = document.getElementById(emailId).value;
        const phoneInput = document.getElementById(phoneId).value;
        
        const emailErrorMessage = document.getElementById(emailErrorId);
        const phoneErrorMessage = document.getElementById(phoneErrorId);
        
        let isValid = true;

        // Validate Gmail Email
        if (!emailPattern.test(emailInput)) {
            event.preventDefault();
            emailErrorMessage.style.display = 'block';
            isValid = false;
        } else {
            emailErrorMessage.style.display = 'none';
        }

        // Validate Phone Number
        if (!phonePattern.test(phoneInput)) {
            event.preventDefault();
            phoneErrorMessage.style.display = 'block';
            isValid = false;
        } else {
            phoneErrorMessage.style.display = 'none';
        }

        return isValid;
    });
}

// Apply Gmail and phone validation for each form
validateGmailAndPhoneForm('contactForm', 'email', 'error', 'number', 'phoneError');
validateGmailAndPhoneForm('contactForm1', 'email1', 'error1', 'number1', 'phoneError1');
validateGmailAndPhoneForm('contactForm2', 'email2', 'error2', 'number2', 'phoneError2');
validateGmailAndPhoneForm('contactForm3', 'email3', 'error3', 'number3', 'phoneError3');
validateGmailAndPhoneForm('contactForm4', 'email4', 'error4', 'number4', 'phoneError4');
validateGmailAndPhoneForm('contactForm5', 'email5', 'error5', 'number5', 'phoneError5');
validateGmailAndPhoneForm('contactForm6', 'email6', 'error6', 'number6', 'phoneError6');
validateGmailAndPhoneForm('contactForm7', 'email7', 'error7', 'number7', 'phoneError7');
