function validation3() {

    var validCname = validateCName("cname");
    var validEmail = validateEmail("email");
    var validPrice = validatePrice("price");
    var validBreed = validateBreed("breed");
    

    return validCname && validEmail && validPrice && validBreed;
}

function validateCName(name) {
    var fieldTxt = document.getElementById(name).value;
    

    if (fieldTxt == "") {
        alert('Enter your Cat name');
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
function validatePrice(money) {
    var p = document.getElementById(money).value;
    
    if (p < 0 || p == null) {
        alert('invalid price');
        return false;
    }
    else {

        return true;
    }
}
function validateBreed(cat) {
    var b = document.getElementById(cat).value;
    
    if (b == "" || b.lenght < 8) {
        alert('enter your cat breed');
        return false;
    }
    else {
        
        return true;
    }
}


