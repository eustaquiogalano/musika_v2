import { clearSignUpInputs } from './input-utilities';
import { closeDialogBox, openDialogBox, validateEmail } from './validations';

export function setUpClickEvents() {
  // menu button
  // responsible for opening the sidebar pop-up
  document.querySelector('#menu-button').addEventListener('click', () => {
    const sideBarPopup = document.querySelector('.side-bar-popup');
    sideBarPopup.classList.toggle('toggle-display');
  });

  // submit button
  // responsible for submitting the form and
  // closing the sign-up dialog box
  document
    .querySelector('.sign-up-dialog-box button')
    .addEventListener('click', () => {
      const signUpForm = document.querySelector('#sign-up-form');

      if (signUpForm.checkValidity()) {
        // closes the dialog box
        closeDialogBox();
      }
    });

  // sign-up button
  // responsible for opening the dialog box for signing up
  document
    .querySelector('.log-sign-container .sign-up')
    .addEventListener('click', () => {
      openDialogBox();
    });
}

export function initInputEvents() {
  document.querySelector('#e-mail').addEventListener('input', () => {
    validateEmail();
  });
}

export function initSubmitEvents() {
  const signUpForm = document.querySelector('#sign-up-form');

  signUpForm.addEventListener('submit', event => {
    // soon to be deleted and be replaced by maybe
    // direct code or a module to handle the
    // submission of the data to the server,
    // but for now we'll stick to preventDefault
    // for practicing the form
    event.preventDefault();

    // for now I will use a function to reset
    // all the inputs after submitting the form
    clearSignUpInputs();

    // Confirmation to the user that he/she is
    // registered already
    alert('You are registered!');
  });
}
