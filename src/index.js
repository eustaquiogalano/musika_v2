import '@fontsource/kanit';
import './styles.css';
import {
  initSignUpButton,
  initSubmitSignUpButton,
  setUpClickEvents,
} from './scripts/events';

document.addEventListener('DOMContentLoaded', () => {
  setUpClickEvents();
  initSignUpButton();
  initSubmitSignUpButton();
});
