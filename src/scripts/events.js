import { closeDialogBox, openDialogBox } from './validations';

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
    .addEventListener('click', event => {
      // stop the page from loading
      event.preventDefault();

      // closes the dialog box
      closeDialogBox();

      // presentation of result to the user
      alert('You are registered');
    });

  // sign-up button
  // responsible for opening the dialog box for signing up
  document
    .querySelector('.log-sign-container .sign-up')
    .addEventListener('click', () => {
      openDialogBox();
    });
}
