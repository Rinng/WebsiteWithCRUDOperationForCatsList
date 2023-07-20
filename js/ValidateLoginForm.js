function validation() {

    var validEmail = validateEmail("oi");
    var validPass = validatePass("password-input-field");
    

    return validEmail && validPass;
}

function validateEmail(email) {
    var fieldTxt = document.getElementById(email).value;
    var patten = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");

    if (!patten.test(fieldTxt)) {
        alert('Re-Enter your email');
        return false;
    }
    else {
        
        return true;
    }
}

function validatePass(pass) {
    var password = document.getElementById(pass).value;

    var patten = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$");

    if (!patten.test(password)) {
        alert('Re-enter you password');
        return false;
    }
    else {
        
        return true;
    }
}


