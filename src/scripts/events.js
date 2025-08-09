import { clearSignUpInputs } from './input-utilities';
import {
  closeDialogBox,
  openDialogBox,
  validateEmail,
  validatePassWord,
} from './validations';

export function setUpClickEvents() {
  const menuButton = document.querySelector('#menu-button');
  const signUpButton = document.querySelector('.sign-up');
  const logInButton = document.querySelector('.log-in');
  const signUpDialogBox = document.querySelector('.sign-up-dialog-box');
  const logInDialogBox = document.querySelector('.log-in-dialog-box');
  const signUpForm = document.querySelector('#sign-up-form');
  const submitSignUpButton = document.querySelector(
    '.sign-up-dialog-box button'
  );
  const submitLogInButton = document.querySelector('.log-in-dialog-box button');

  // menu button
  // responsible for opening the sidebar pop-up
  menuButton.addEventListener('click', () => {
    const sideBarPopup = document.querySelector('.side-bar-popup');
    sideBarPopup.classList.toggle('toggle-display');
  });

  // sign-up button
  // responsible for opening the dialog box for signing up
  signUpButton.addEventListener('click', () => {
    openDialogBox(signUpDialogBox);
  });

  // submit button
  // responsible for submitting the form and
  // closing the sign-up dialog box
  submitSignUpButton.addEventListener('click', () => {
    if (signUpForm.checkValidity()) {
      // closes the dialog box
      closeDialogBox(signUpDialogBox);
    }
  });

  // log-in button
  // opening the log-in dialog box
  logInButton.addEventListener('click', () => {
    openDialogBox(logInDialogBox);
  });

  // submit log in button
  // responsible for logging the user in
  // or check the login details if not
  submitLogInButton.addEventListener('click', () => {
    closeDialogBox(logInDialogBox);
  });
}

export function initInputEvents() {
  document.querySelector('#e-mail').addEventListener('input', () => {
    validateEmail();
  });

  document.querySelector('#password').addEventListener('input', () => {
    validatePassWord();
  });
}

export function initSubmitEvents() {
  const signUpForm = document.querySelector('#sign-up-form');
  const logInForm = document.querySelector('#log-in-form');

  signUpForm.addEventListener('submit', event => {
    // soon to be deleted and be replaced by maybe
    // direct code or a module to handle the
    // submission of the data to the server,
    // but for now we'll stick to preventDefault
    // for practicing the form
    event.preventDefault();

    // also soon to be deleted since reloading the page
    // autmatically resets the form, but
    // for now I will use a function to reset
    // all the inputs after submitting the form
    clearSignUpInputs();

    // Confirmation to the user that he/she is
    // registered already
    alert('You are registered!');
  });

  logInForm.addEventListener('submit', event => {
    event.preventDefault();
  });
}
