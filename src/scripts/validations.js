export function validateEmail() {
  const email = document.querySelector('#e-mail');

  // if the value of the input is invalid
  // show an error message
  if (!email.checkValidity()) {
    email.reportValidity();
  }
}

export function validatePassWord() {
  // get a reference of the password input
  // and puts its value in a variable for later use
  const password = document.querySelector('#password');
  const passwordValue = password.value;

  // get a references of checkmarks
  const checkmarkDigit = document.querySelector('.checkmark.digit');
  const checkmarkSpecialChar = document.querySelector(
    '.checkmark.special-char'
  );
  const checkmarkUppercase = document.querySelector('.checkmark.uppercase');
  const checkmarkLowercase = document.querySelector('.checkmark.lowercase');
  const checkmarkEightChar = document.querySelector('.checkmark.eight-char');

  // using regex pattern and its .test() method
  // get the bolean value of each validation
  // true = passed a certain regex patter test
  // false = failed a certain regex patter test
  const hasDigit = /\d/.test(passwordValue);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);
  const hasUppercase = /[A-Z]/.test(passwordValue);
  const hasLowercase = /[a-z]/.test(passwordValue);
  const numberOfChars = passwordValue.length >= 8;

  // use the private function toggleCheckmark
  // pass each result of the test above
  // and pass the reference to the element to be
  // marked green if it passed the test
  toggleCheckmark(hasDigit, checkmarkDigit);
  toggleCheckmark(hasSpecial, checkmarkSpecialChar);
  toggleCheckmark(hasUppercase, checkmarkUppercase);
  toggleCheckmark(hasLowercase, checkmarkLowercase);
  toggleCheckmark(numberOfChars, checkmarkEightChar);
}

export function closeDialogBox(dialogBox) {
  dialogBox.style.display = 'none';
}

export function openDialogBox(dialogBox) {
  dialogBox.style.display = 'flex';
}

// private function for toggling green and gray color
// of the validation checkmarks
function toggleCheckmark(validation, checkmark) {
  // if validation argument was true turn it to green
  // make it gray again if not
  if (validation) {
    checkmark.style.fill = 'var(--green)';
  } else {
    checkmark.style.fill = 'var(--quaternary-color)';
  }
}
