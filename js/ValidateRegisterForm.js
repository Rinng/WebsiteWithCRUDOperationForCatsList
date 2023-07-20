function validation1() {

    var validFname = validateFName("fname");
    var validLName = validateLName("lname");
    var validEmail = validateEmail("email");
    var validPass = validatePass("password");
    var validRePass = validateRePass("rePassword");

    return validFname && validLName && validEmail && validPass && validRePass;
}

function validateFName(name) {
    var fieldTxt = document.getElementById(name).value;
    

    if (fieldTxt == "") {
        alert('Enter your First name');
        return false;
    }
    else {
        
        return true;
    }
}
function validateLName(name) {
    var fieldTxt = document.getElementById(name).value;


    if (fieldTxt == "") {
        alert('Enter your Last Name');
        return false;
    }
    else {

        return true;
    }
}
function validateEmail(email) {
    var fieldTxt = document.getElementById(email).value;

    var patten = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");

    if (!patten.test(fieldTxt)) {
        alert('Enter your email');
        return false;
    }
    else {

        return true;
    }
}
function validatePass(passw) {
    var password = document.getElementById(passw).value;
    
    var patten = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$");

    if (!patten.test(password)) {
        alert('enter you password');
        return false;
    }
    else {

        return true;
    }
}
function validateRePass(pass) {
    var password = document.getElementById(pass).value;
    
    

    if (password != document.getElementById("password").value) {
        alert('your password does not match');
        return false;
    }
    else {
        
        return true;
    }
}

