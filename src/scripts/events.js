import { closeDialogBox, openDialogBox } from './validations';

export function setUpClickEvents() {
  document.querySelector('#menu-button').addEventListener('click', () => {
    const sideBarPopup = document.querySelector('.side-bar-popup');
    sideBarPopup.classList.toggle('toggle-display');
  });
}

// This sign-up button is from the sign-up dialog box
export function initSubmitSignUpButton() {
  document
    .querySelector('.sign-up-dialog-box button')
    .addEventListener('click', event => {
      // stop the page from loading
      event.preventDefault();

      // closes the dialog box
      closeDialogBox();

      // presentation of result to the user
      alert('You are registered');
    });
}

// This button is from the sign-up button from main header
export function initSignUpButton() {
  document
    .querySelector('.log-sign-container .sign-up')
    .addEventListener('click', () => {
      console.log('hehehe');

      openDialogBox();
    });
}
