const claimBtn = document.querySelector(".claim-btn");
//first name
const firstName = document.querySelector(".first-name");
const nameLabel = document.querySelector(".first-name-label");
const nameError = document.querySelector(".first-name-error");
//last name
const lastName = document.querySelector(".last-name");
const lastNameLabel = document.querySelector(".last-name-label");
const lastNameError = document.querySelector(".last-name-error");
//email
const emailAddress = document.querySelector(".email-address");
const emailLabel = document.querySelector(".email-label");
const emailError = document.querySelector(".email-error");

//password
const password = document.querySelector(".password");
const passwordLabel = document.querySelector(".password-label");
const passwordError = document.querySelector(".password-error");

//confirmation
const confirmationMsg = document.querySelector(".confirmation");

//validations
let emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passValidation = /^\d{8}$/;

let errorFunc = function () {
  if (firstName.value.length === 0) {
    nameError.style.display = "inline";
    nameLabel.textContent = "First name cannot be empty";
    firstName.style.borderColor = "red";
  } else {
    firstName.style.borderColor = "hsl(246, 25%, 77%)";
    nameLabel.textContent = "";
    nameError.style.display = "none";
  }
  if (lastName.value.length === 0) {
    lastNameError.style.display = "inline";
    lastNameLabel.textContent = "Last name cannot be empty";
    lastName.style.borderColor = "red";
  } else {
    lastName.style.borderColor = "hsl(246, 25%, 77%)";
    lastNameLabel.textContent = "";
    lastNameError.style.display = "none";
  }

  if (emailAddress.value.length === 0) {
    emailError.style.display = "inline";
    emailLabel.textContent = "Email cannot be empty";
    emailAddress.style.borderColor = "red";
  } else if (
    !emailAddress.value.match(emailValidation) &&
    emailAddress.value.length !== 0
  ) {
    emailError.style.display = "inline";
    emailLabel.textContent = "Looks like this is not an email";
    emailAddress.style.borderColor = "red";
  } else {
    emailAddress.style.borderColor = "hsl(246, 25%, 77%)";
    emailLabel.textContent = "";
    emailError.style.display = "none";
  }
  if (password.value.length === 0) {
    passwordError.style.display = "inline";
    passwordLabel.textContent = "Password cannot be empty";
    password.style.borderColor = "red";
  } else {
    password.style.borderColor = "hsl(246, 25%, 77%)";
    passwordLabel.textContent = "";
    passwordError.style.display = "none";
  }
  if (!password.value.match(passValidation) && password.value.length !== 0) {
    passError.style.display = "inline";
    passwordLabel.textContent = "The password must be 8 numeric characters.";
    password.style.borderColor = "red";
  } else if (
    firstName.value.length !== 0 &&
    lastName.value.length !== 0 &&
    emailAddress.value.length !== 0 &&
    emailAddress.value.match(emailValidation) &&
    password.value.match(passValidation) &&
    password.value.length !== 0
  ) {
    confirmationMsg.textContent = "Success! Please, check your email";
  } else {
    console.log("err");
  }
};

// btn click
claimBtn.addEventListener("click", function (e) {
  e.preventDefault();
  errorFunc();
});
