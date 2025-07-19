export function setUpClickEvents() {
  document.querySelector('#menu-button').addEventListener('click', () => {
    const sideBarPopup = document.querySelector('.side-bar-popup');
    sideBarPopup.classList.toggle('toggle-display');
  });
}
