"use strict";

const fullNameInput = document.querySelector(".fullNameInput");
const usernameInput = document.querySelector(".usernameInput");
const emailInput = document.querySelector(".emailInput");
const passwordInput = document.querySelector(".passwordInput");
const rePasswordInput = document.querySelector(".rePasswordInput");
const interestInput = document.querySelector(".interestInput");
const submitBtn = document.querySelector(".submitBtn");

const form = document.querySelector("form");

const fullNameError = document.querySelector(".fullNameError");
const usernameError = document.querySelector(".usernameError");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");
const rePasswordError = document.querySelector(".rePasswordError");
const interestError = document.querySelector(".interestError");

const validFullname = /^[a-zA-Z\s]+$/;
const validUsername = /^[a-zA-z0-9]+$/;
const validEmail = /^[a-zA-z0-9]{6,}@[a-zA-z]+.[a-zA-z]{2,}$/;
const validPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)[a-zA-z0-9\W]+$/;

fullNameInput.addEventListener("blur", function () {
  if (fullNameInput.value.trim() == "") fullNameError.textContent = "";
  else if (!validFullname.test(fullNameInput.value)) {
    fullNameError.textContent = "full name is invalid";
    fullNameError.style.color = "red";
  } else {
    fullNameError.textContent = "valid";
    fullNameError.style.color = "green";
  }
});

usernameInput.addEventListener("blur", function () {
  if (usernameInput.value.trim() == "") usernameError.textContent = "";
  else if (!validUsername.test(usernameInput.value)) {
    usernameError.textContent = "username is invalid";
    usernameError.style.color = "red";
  } else {
    usernameError.textContent = "valid";
    usernameError.style.color = "green";
  }
});

emailInput.addEventListener("blur", function () {
  if (emailInput.value.trim() === "") emailError.textContent = "";
  else if (!validEmail.test(emailInput.value)) {
    emailError.textContent = "email is invalid";
    emailError.style.color = "red";
  } else {
    emailError.textContent = "valid";
    emailError.style.color = "green";
  }
});

passwordInput.addEventListener("blur", function () {
  if (passwordInput.value.trim() === "") passwordError.textContent = "";
  else if (!validPassword.test(passwordInput.value)) {
    passwordError.textContent = "password is invalid";
    passwordError.style.color = "red";
  } else {
    passwordError.textContent = "valid";
    passwordError.style.color = "green";
  }
});

rePasswordInput.addEventListener("blur", function () {
  if (rePasswordInput.value.trim() === "") rePasswordError.textContent = "";
  else if (!validPassword.test(rePasswordInput.value)) {
    rePasswordError.textContent = "confirm password is invalid";
    rePasswordError.style.color = "red";
  } else if (passwordInput.value !== rePasswordInput.value) {
    rePasswordError.textContent = "confirm password does not match";
    reportError.style.color = "red";
  } else {
    rePasswordError.textContent = "valid";
    rePasswordError.style.color = "green";
  }
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const errors = document.querySelectorAll(".error");
  let isValid = true;
  errors.forEach((element) => {
    if (element.textContent !== "valid") {
      isValid = false;
    }
  });
  console.log(isValid);
  if (isValid) {
    alert("Register successfully!");
    form.submit();
  }
});
