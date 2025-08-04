export function validateEmail() {
  const email = document.querySelector('#e-mail');

  // if the value of the input is invalid
  // show an error message
  if (!email.checkValidity()) {
    email.reportValidity();
  }
}

export function closeDialogBox() {
  document.querySelector('.sign-up-dialog-box').style.display = 'none';
}

export function openDialogBox() {
  document.querySelector('.sign-up-dialog-box').style.display = 'flex';
}
