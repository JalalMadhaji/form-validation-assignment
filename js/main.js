let form = document.getElementById("form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let age = document.getElementById("age");
let mobile = document.getElementById("mobile");
let message = document.getElementById("message");
message.maxLength = 300;
let submitBtn = document.getElementById("submitBtn");
const validateObj = {
    name: false,
    email: false,
    age: false,
    mobile: false,
    message: false
};

function validateEmail() {
    let exp = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    let rslt = exp.test(email.value);
    if (rslt) {
        email.classList.add("valid");
        email.parentNode.querySelector("span").textContent = "";
        validateObj.email = true;
    } else {
        email.classList.remove("valid");
        email.classList.add("warning");
        email.parentNode.querySelector("span").textContent =
            "* Email field is Required, Must be valid Email Address";
        validateObj.email = false;
    }
}
function validateName() {
    let exp = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
    let rslt = exp.test(name.value);
    if (rslt) {
        name.classList.add("valid");
        name.parentNode.querySelector("span").textContent = "";
        validateObj.name = true;
    } else {
        name.classList.remove("valid");
        name.classList.add("warning");
        name.parentNode.querySelector("span").textContent =
            "* Name field is Required, Must be valid Name [only letters,not empty]";
        validateObj.name = false;
    }
}
function validateAge() {
    let rslt = false;
    if (age.value >= 1 && age.value <= 100) {
        rslt = true;
    } else {
        rslt = false;
    }
    if (rslt) {
        age.classList.add("valid");
        age.parentNode.querySelector("span").textContent = "";
        validateObj.age = true;
    } else {
        age.classList.remove("valid");
        age.classList.add("warning");
        age.parentNode.querySelector("span").textContent =
            "*  Age field is Required, Must be realistic Age";
        validateObj.age = false;
    }
}

function validateMobile() {
    let rslt = false;
    switch (true) {
        case mobile.value.startsWith("77") &&
            mobile.value.length > 8 &&
            mobile.value.length < 10:
            rslt = true;
            break;
        case mobile.value.startsWith(71) &&
            mobile.value.length > 8 &&
            mobile.value.length < 10:
            rslt = true;
            break;
        case mobile.value.startsWith(73) &&
            mobile.value.length > 8 &&
            mobile.value.length < 10:
            rslt = true;
            break;
        case mobile.value.startsWith(70) &&
            mobile.value.length > 8 &&
            mobile.value.length < 10:
            rslt = true;
            break;
        default:
            rslt = false;
            break;
    }
    if (rslt) {
        mobile.classList.add("valid");
        mobile.parentNode.querySelector("span").textContent = "";
        validateObj.mobile = true;
    } else {
        mobile.classList.remove("valid");
        mobile.classList.add("warning");
        mobile.parentNode.querySelector("span").textContent =
            "* Mobile field is Required, Must be valid Mobile Number";
        validateObj.mobile = false;
    }
}

function handleMessageField(e) {
    let rslt = false;
    if (message.value != "") {
        let counter = e.target.value.length;
        e.target.parentNode.dataset.count = counter;
    }
    if (message.value.length > 5 && message.value.length <= 300) {
        rslt = true;
    } else {
        rslt = false;
    }
    if (rslt) {
        message.classList.add("valid");
        message.parentNode.querySelector("span").textContent = "";
        validateObj.message = true;
    } else {
        message.classList.remove("valid");
        message.classList.add("warning");
        message.parentNode.querySelector("span").textContent =
            "* Message field is Required, Must not be Empty";
        validateObj.message = false;
    }
}

email.addEventListener("keyup", validateEmail);
email.addEventListener("blur", validateEmail);
name.addEventListener("keyup", validateName);
name.addEventListener("blur", validateName);
age.addEventListener("keyup", validateAge);
age.addEventListener("blur", validateAge);
mobile.addEventListener("keyup", validateMobile);
mobile.addEventListener("blur", validateMobile);
message.addEventListener("keyup", handleMessageField);
message.addEventListener("blur", handleMessageField);

form.addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();
    validateEmail();
    validateName();
    validateAge();
    validateMobile();
    handleMessageField();
}
submitBtn.addEventListener("click", function() {
    if (
        validateObj.name &&
        validateObj.email &&
        validateObj.age &&
        validateObj.mobile &&
        validateObj.message
    ) {
        form.removeEventListener("submit", submitForm);
    }
});
